"use client"

import type React from "react"
import { forwardRef } from "react"
import { motion } from "framer-motion"
import { If, Then } from "react-if"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/lib/animation-variants"

interface FormButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
  loading?: boolean
  className?: string
  children: React.ReactNode
}

export const FormButton = forwardRef<HTMLButtonElement, FormButtonProps>(
  ({ variant = "primary", loading = false, className, children, disabled, ...props }, ref) => {
    const baseClasses =
      "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"

    const variantClasses = {
      primary: "bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:ring-secondary",
    }

    return (
      <motion.button
        ref={ref}
        disabled={disabled || loading}
        className={cn(baseClasses, variantClasses[variant], loading && "cursor-wait", className)}
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        {...props}
      >
        <If condition={loading}>
          <Then>
            <motion.div
              className="mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
          </Then>
        </If>
        {children}
      </motion.button>
    )
  },
)

FormButton.displayName = "FormButton"
