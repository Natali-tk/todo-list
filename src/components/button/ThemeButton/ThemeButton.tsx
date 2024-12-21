import { useTheme } from "@/context/Theme/Theme";
import { Icon } from "@iconify/react";

export const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const handleClick = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="flex justify-end pr-6">
      <button
        onClick={handleClick}
        className={` text-white p-2 rounded ${
          theme === "dark" ? "bg-orange" : "bg-green"
        }`}
      >
        {theme === "dark" ? (
          <Icon icon="mingcute:sun-fill" className="text-2xl" />
        ) : (
          <Icon icon="mingcute:moon-fill" className="text-2xl" />
        )}
      </button>
    </div>
  );
};
