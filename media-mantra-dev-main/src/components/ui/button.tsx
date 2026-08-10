import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mm-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        primary:
          "rounded-full bg-mm-gold px-8 py-3 text-sm uppercase text-mm-graphite shadow-[0_0_40px_rgba(210,180,80,0.25)] hover:shadow-[0_0_60px_rgba(210,180,80,0.45)]",
        outline:
          "rounded-full border border-mm-gold/40 bg-mm-white/5 px-8 py-3 text-sm uppercase text-mm-cream backdrop-blur-md hover:border-mm-gold hover:bg-mm-gold/10",
        ghost: "rounded-full px-5 py-2 text-sm text-mm-light hover:text-mm-cream",
        link: "text-mm-gold underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11",
        lg: "h-12 md:h-14",
        sm: "h-9 rounded-full px-4 text-xs",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
