import { NextResponse } from "next/server"
import { Resend } from "resend"
import * as z from "zod"

// Initialize Resend with the API key
const resend = new Resend(process.env.RESEND_API_KEY)

// Define the schema for form validation
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
})

export async function POST(req: Request) {
  try {
    // Parse the request body
    const body = await req.json()

    // Validate the form data
    const result = formSchema.safeParse(body)

    if (!result.success) {
      // If validation fails, return the error messages
      const errors = result.error.errors.map((error) => ({
        field: error.path[0],
        message: error.message,
      }))
      return NextResponse.json({ error: "Validation failed", errors }, { status: 400 })
    }

    const { name, email, message } = result.data

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "celestenmy23@gmail.com", // Use the verified email address
      subject: "New Contact Form Submission",
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    })

    if (error) {
      console.error("Error sending email:", error)
      return NextResponse.json(
        {
          error: "Failed to send email",
          details: error,
        },
        { status: 500 },
      )
    }

    return NextResponse.json({ success: true, message: "Email sent successfully" })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json(
      {
        error: "An unexpected error occurred",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}
