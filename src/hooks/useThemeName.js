import { useEffect, useState } from "react";
import { getFromLocalStorage } from "services/localStorage";

const useThemeName = () => {
  const [currentThemeName, setCurrentThemeName] = useState(
    getFromLocalStorage("theme") || "light"
  );
  useEffect(() => {
    const checkTheme = () => {
      const lsTheme = getFromLocalStorage("theme");
      console.log("change", lsTheme);
      if (lsTheme) setCurrentThemeName(lsTheme);
    };

    window.addEventListener("storage", checkTheme);
    return () => window.removeEventListener("storage", checkTheme);
  }, []);
  return currentThemeName;
};

export default useThemeName;
