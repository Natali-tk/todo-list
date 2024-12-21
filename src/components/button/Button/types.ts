import { ReactNode } from "react";

export interface ButtonProps {
  label?: string;
  icon?: ReactNode | HTMLAllCollection | string;
  nameBtn?: "primary" | "secondary"
  disabled?: boolean;
  children?: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  [key: string]: any;
}
