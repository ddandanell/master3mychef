import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[#C5A028]/30 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive active:scale-95 hover:shadow-md",
  {
    variants: {
      variant: {
        primary: "bg-[#C5A028] text-white shadow-sm hover:bg-[#A8841E]",
        default: "bg-[#C5A028] text-white shadow-sm hover:bg-[#A8841E]",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "border border-[#C5A028] bg-transparent text-[#C5A028] hover:border-[#A8841E] hover:bg-[#C5A028]/10 hover:text-[#A8841E]",
        ghost:
          "bg-transparent text-[#C5A028] hover:bg-[#C5A028]/10 hover:text-[#A8841E]",
        whatsapp: "bg-[#C5A028] text-white shadow-sm hover:bg-[#A8841E]",
        link: "text-[#C5A028] underline-offset-4 hover:underline",
      },
      size: {
        default: "min-h-[44px] px-4 py-2.5 has-[>svg]:px-3",
        sm: "min-h-[40px] rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "min-h-[48px] rounded-md px-6 has-[>svg]:px-4",
        brand: "min-h-[44px] rounded-full px-8 py-3 text-sm uppercase tracking-[0.2em]",
        icon: "min-w-[44px] min-h-[44px]",
        "icon-sm": "min-w-[40px] min-h-[40px]",
        "icon-lg": "min-w-[48px] min-h-[48px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "primary",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
