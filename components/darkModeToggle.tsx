import { cls } from "@lib/utils";
import useStore from "@lib/store";
import { useEffect, useState } from "react";

interface FloatingButton {
  isFloating?: boolean;
}

const DarkModeToggle = ({ isFloating = false }: FloatingButton) => {
  const { theme, setDark, setLight } = useStore();
  const [loaded, setLoaded] = useState(false);
  const onClick = () => {
    if (theme && theme === "dark") {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      setLight();
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      setDark();
    }
  };
  useEffect(() => setLoaded(true), []);

  return (
    <button
      className={cls(
        "flex select-none mt-5 rounded-full w-7 h-7 md:w-8 md:h-8 ring text-[#303340] dark:text-[#c9d1d9] ring-[#303340] dark:ring-[#c9d1d9]  text-center items-center justify-center hover:animate-wiggle",
        isFloating ? "bg-white dark:bg-[#0d1117]" : ""
      )}
      onClick={onClick}
    >
      {loaded && theme === "dark" ? (
        <svg
          className="w-5 h-5 md:w-6 md:h-6"
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
          className="w-5 h-5 md:w-6 md:h-6"
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
