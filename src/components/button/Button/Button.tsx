import { ButtonProps } from './types';
import clsx from 'clsx';
import { overrideTailwindClasses } from "tailwind-override";
const STYLES = {
  primary:
    "flex justify-center items-center  gap-2 w-40 h-12 text-black font-medium  text-center bg-white box-border rounded-lg px-2 py-4",
  secondary:
    "text-green border-solid border border-green hover:border-green-hover focus:border-green-pressed disabled:border-green-inactive",

};

const Button = ({
  className,
  label = "",
  nameBtn = "primary",
  disabled,
  type = "button",
  children,
  icon,
  onClick,
  ...props
}:ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={overrideTailwindClasses(
        clsx(
          `text-lg px-2 py-4 transition duration-200 ${STYLES[nameBtn]}`,
          className
        )
      )}
      {...props}
    >
      {children}
      {label}
    </button>
  );
};

export default Button;