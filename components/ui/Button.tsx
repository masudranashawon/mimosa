import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

export const buttonVariance = cva(
  "inline-block text-center text-sm px-6 py-3 rounded-xl border eq font-medium active:scale-105 disabled:bg-gray disabled:border-gray disabled:text-dark/50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        dark: "border-dark bg-dark text-white hover:border-dark/90 hover:bg-dark/90",
        outline:
          "border-dark bg-transparent text-dark hover:bg-dark hover:text-white",
        ghost:
          "border-transparent bg-transparent text-dark hover:border-gray hover:bg-gray",
        rose: "border-red bg-red text-white hover:border-red/90 hover:bg-red/90",
        valentine:
          "border-pink bg-pink text-dark hover:border-pink/90 hover:bg-pink/90",
        halloween:
          "border-orange bg-orange text-dark hover:border-orange/90 hover:bg-orange/90",
        success:
          "border-green bg-green text-dark hover:border-green/90 hover:bg-green/90",
        ocean:
          "border-blue bg-blue text-dark hover:border-blue/90 hover:bg-blue/90",
        royalty:
          "border-violet bg-violet text-white hover:border-violet/90 hover:bg-violet/90",
      },
      size: {
        auto: "w-auto",
        full: "w-full",
      },
    },
    defaultVariants: {
      variant: "dark",
      size: "auto",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariance> {}

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  disabled,
  onClick,
  variant,
  size,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={cn(buttonVariance({ variant, size }))}
    >
      {children}
    </button>
  );
};

export default Button;
