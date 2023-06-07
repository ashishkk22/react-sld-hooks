import React, { FC, ReactNode } from "react";
type ButtonProps = {
  variant?: string;
  children?: ReactNode;
};
export const Button: FC<ButtonProps> = ({ variant = "primary", children }) => {
  return <button className={`button ${variant}`}>{children}</button>;
};

export default Button;
