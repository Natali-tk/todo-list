import { ThemeButton } from "@/components/button";
import { useTheme } from "@/context/Theme/Theme";
import { FC,  useRef, useState } from "react";
import Menu from "../Menu/Menu";


const LayoutHeader: FC = () => {
  const [active, setActive] = useState(false);
  const { theme }  = useTheme()
  const sidebar = useRef<HTMLDivElement | null>(null);


  const handleClick = () => {
    setActive(!active);
  };
  return (
    <>
      <header className={` relative z-100 ${theme==="dark"?"bg-black":"bg-white"}`}>
        <aside
          ref={sidebar}
          className={` absolute z-100 text-white w-56 min-h-screen overflow-y-auto transition-transform py-4 pl-2 ease-in-out duration-300 ${
            active == true ? "transform-translate-x-full bg-blue visible" : "w-0 invisible"
          }`}
        >
          <ThemeButton />
          <Menu
            active ={active}
            setActive={setActive}
            links={[
              { name: "Homepage", href: "/" },
              { name: "Addpage", href: "/add" },
            ]}
          />
        </aside>
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className={`shadow ${theme === "dark" ? "bg-black" : "bg-white"}`}>
            <div className="container mx-auto">
              <div className="flex justify-end items-center py-4 px-2">

                <button
                  className="text-gray-500 hover:text-gray-600 "
                  onClick={handleClick}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default LayoutHeader;
