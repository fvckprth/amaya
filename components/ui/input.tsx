import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-none bg-[#2E2E2E]/25 px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#E7E6E9]/50 text-[#E7E6E9] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

const CustomInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    // Add your custom logic here
    return (
      <Input
        type={type}
        className={cn(
          "custom-input-class bg-transparent",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
CustomInput.displayName = "CustomInput"

export { Input, CustomInput }
