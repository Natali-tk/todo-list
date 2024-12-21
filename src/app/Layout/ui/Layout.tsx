import { useTheme } from "@/context/Theme/Theme";
import {  LayoutHeader } from "@/widgets";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const { theme } = useTheme();
  return (
    <div className={`h-screen overflow-x-hidden font-openSans ${theme === 'dark' ? 'bg-black text-white' : 'bg--white text-black'}`}>
      <LayoutHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

 