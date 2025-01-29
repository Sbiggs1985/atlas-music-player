import React, { useEffect, useState } from "react";

const Footer: React.FC = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark"); // Add dark mode globally
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark"); // Remove dark mode globally
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="text-center p-8 bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText transition-all">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 bg-darkText dark:bg-lightText text-lightBg dark:text-darkBg rounded-md transition-all"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <p className="mt-4">&copy; {new Date().getFullYear()} Atlas School</p>
    </div>
  );
};

export default Footer;