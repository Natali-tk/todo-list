import clsx from 'clsx';
import { overrideTailwindClasses } from 'tailwind-override';
import { InputProps } from './types';

export const Input= ({
  className,
  classes,
  name,
  id,
  disabled,
  placeholder,
  isInvalid,
  errorText,
  type,
  value,
  onChange,
  required,
  ...props
}:InputProps) => {
  return (
    <div className={clsx('relative flex flex-col  w-full', classes?.container, className)}>
      <input className={overrideTailwindClasses(clsx(
        'hover:border-light-blue', {
        'bg-light-grey border-none text-grey': disabled,
        'border-grey': !isInvalid,
        'border-red': isInvalid
      }, classes?.input))} name={name} type={type} disabled={disabled} placeholder={placeholder}  />
      {isInvalid && errorText && (
        <p  className={clsx("text-red mt-1", classes?.error)}>{errorText}</p>
      )}
    </div>
  );
};