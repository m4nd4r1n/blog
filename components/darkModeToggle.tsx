import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [theme, setTheme] = useState("");
  useEffect(() => {
    setTheme(localStorage.theme);
  }, []);
  const onClick = () => {
    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
      setTheme("light");
    } else {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  };

  return (
    <button
      className="flex select-none mt-5 rounded-full ring text-[#303340] dark:text-[#c9d1d9] ring-[#303340] dark:ring-[#c9d1d9] w-8 h-8 text-center items-center justify-center"
      onClick={onClick}
    >
      {theme === "dark" ? (
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
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          ></path>
        </svg>
      ) : (
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
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          ></path>
        </svg>
      )}
    </button>
  );
};

export default DarkModeToggle;
