export interface InputClasses {
  container?: string;
  input?: string;
  error?: string;
}
export interface InputProps{
  className:string,
  classes?:InputClasses,
  name:string,
  disabled?:boolean,
  placeholder?:string,
  isInvalid?:boolean,
  errorText?:string,
  type: string,
  id?:string
  props?: ChildNode,
  required?: boolean,
  value?:string,
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}