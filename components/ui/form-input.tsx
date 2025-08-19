"use client"

import type React from "react"
import { forwardRef } from "react"
import { motion } from "framer-motion"
import { If, Then } from "react-if"
import { cn } from "@/lib/utils"
import { inputVariants } from "@/lib/animation-variants"

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  className?: string
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(({ label, error, className, ...props }, ref) => {
  return (
    <div className="space-y-2">
      <If condition={label}>
        <Then>
          <motion.label
            htmlFor={props.id}
            className="block text-sm font-medium text-foreground"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {label}
          </motion.label>
        </Then>
      </If>
      <motion.input
        ref={ref}
        className={cn(
          "w-full px-4 py-3 border border-input bg-background text-foreground rounded-lg",
          "focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent",
          "transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
          error && "border-destructive focus:ring-destructive",
          className,
        )}
        variants={inputVariants}
        whileFocus="focus"
        animate={error ? "error" : "animate"}
        {...props}
      />
      <If condition={error}>
        <Then>
          <motion.span
            className="text-sm text-destructive"
            role="alert"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            {error}
          </motion.span>
        </Then>
      </If>
    </div>
  )
})

FormInput.displayName = "FormInput"
