import * as React from "react";
import { cn } from "@/lib/utils";

const Button = React.forwardRef(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-xl text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          variant === "default" &&
            "bg-gray-800 hover:bg-gray-700 text-white px-4 py-2",
          variant === "highlight" &&
            "bg-purple-600 hover:bg-purple-700 text-white shadow-md shadow-purple-500/50 px-4 py-2",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
