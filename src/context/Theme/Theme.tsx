import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useLayoutEffect,
  useState,
} from 'react'



interface ThemeProviderProps {
  children: ReactNode
}

interface ThemeContextProps {
  theme: string
  setTheme: Dispatch<SetStateAction<string>>
}

export const ThemeContext = createContext<ThemeContextProps| undefined>(undefined)

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState(window.localStorage.getItem("theme")??'light');

  useLayoutEffect(() => {
    setTheme(theme);
    localStorage.setItem("theme", `${theme}`)
    
  },[theme])
  
 
  return <ThemeContext.Provider value={{ theme, setTheme }}>
    { children }
  </ThemeContext.Provider>
}

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must within ThemeProvider")
  }
  return context;
}

export {ThemeProvider, useTheme}