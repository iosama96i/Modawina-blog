import * as React from "react";

export interface IButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit";
}

export default function Button({
  className = "bg-primary hover:bg-LightOrange",
  children = null,
  onClick = () => {},
  type="button"
}: IButtonProps) {
  return (
    <button
    type={type}
    onClick={onClick} className={" shadow-sm text-white "+className}>
      {children}
    </button>
  );
}
