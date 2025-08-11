import { Sun, Moon } from "lucide-react";
import { useUserData } from "@/hooks/useUserData";

export default function ThemeToggle() {
  const { darkMode, toggleDarkMode } = useUserData();
  
  return (
    <>
      {darkMode ? <Sun onClick={toggleDarkMode} className="w-5 h-5 text-app-primary cursor-pointer"/> : <Moon onClick={toggleDarkMode} className="w-5 h-5 text-app-primary cursor-pointer"/>}
    </>
  );
}