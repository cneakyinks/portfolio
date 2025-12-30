import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

// Simple counter for email numbering (resets on server restart)
let emailCounter = 0

export async function POST(request: NextRequest) {
  try {
    const { drawing, message, name, contact, timestamp } = await request.json()

    // Increment counter for each new email
    emailCounter++
    const emailNumber = emailCounter.toString().padStart(4, "0")

    // Convert base64 to buffer for attachment
    const base64Data = drawing.replace(/^data:image\/png;base64,/, "")
    const buffer = Buffer.from(base64Data, "base64")

    const { data, error } = await resend.emails.send({
      from: "cneakyinks anony <onboarding@resend.dev>",
      to: ["celestenmy23@gmail.com"],
      subject: `New Love Letter #${emailNumber}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00FFFF;">New Love Letter #${emailNumber}</h2>
          <p><strong>Received:</strong> ${new Date(timestamp).toLocaleString()}</p>
          ${name ? `<p><strong>Name:</strong> ${name}</p>` : ""}
          ${contact ? `<p><strong>Contact:</strong> ${contact}</p>` : ""}
          ${message ? `<p><strong>Message:</strong></p><p style="background: #f5f5f5; padding: 15px; border-radius: 5px;">${message}</p>` : ""}
          <p>A new drawing has been sent from your portfolio! Check the attachment to view the artwork.</p>
        </div>
      `,
      attachments: [
        {
          filename: `love-letter-${emailNumber}.png`,
          content: buffer,
        },
      ],
    })

    if (error) {
      console.error("Error sending email:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
