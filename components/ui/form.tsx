"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const Form = React.forwardRef<HTMLFormElement, React.HTMLAttributes<HTMLFormElement>>(
  ({ className, ...props }, ref) => <form ref={ref} className={cn("space-y-8", className)} {...props} />,
)
Form.displayName = "Form"

const FormControl = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("relative", className)} {...props} />,
)
FormControl.displayName = "FormControl"

const FormField = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("", className)} {...props} />,
)
FormField.displayName = "FormField"

const FormItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("space-y-2", className)} {...props} />,
)
FormItem.displayName = "FormItem"

const FormLabel = React.forwardRef<HTMLLabelElement, React.HTMLAttributes<HTMLLabelElement>>(
  ({ className, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className,
      )}
      {...props}
    />
  ),
)
FormLabel.displayName = "FormLabel"

const FormMessage = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => <p ref={ref} className={cn("text-sm text-destructive", className)} {...props} />,
)
FormMessage.displayName = "FormMessage"

export { Form, FormControl, FormField, FormItem, FormLabel, FormMessage }
