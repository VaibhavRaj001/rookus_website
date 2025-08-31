import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl border p-6 transition-all",
          variant === "default" &&
            "bg-[#0000000f] border border-solid border-[#ffffff26]",
          variant === "highlight" &&
            "bg-gradient-to-b from-purple-600 to-purple-800 border border-purple-500 shadow-xl shadow-purple-500/40 text-white",
          className
        )}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";

const CardHeader = ({ className, ...props }) => (
  <div className={cn("mb-4", className)} {...props} />
);

const CardTitle = ({ className, ...props }) => (
  <h3 className={cn("text-lg font-semibold", className)} {...props} />
);

const CardContent = ({ className, ...props }) => (
  <div className={cn("text-sm leading-relaxed", className)} {...props} />
);

export { Card, CardHeader, CardTitle, CardContent };
