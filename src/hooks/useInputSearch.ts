import { ChangeEvent, FocusEvent, useState } from "react"

interface InputReturn {
  value: string,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}
const resetInput = (e: FocusEvent<HTMLInputElement>) => {
  e.target.value = "";
}

export function useInputSearch(): InputReturn {
  const [value, setValue] = useState("");
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
   
  }
  const onFocus = (event: FocusEvent<HTMLInputElement>) => {
    resetInput(event);
  }
  return {
    value,
    onChange
  }
}