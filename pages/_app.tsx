import { AppProps } from "next/app";
import { useEffect } from "react";
import "../styles/index.css";
import "../styles/github-markdown.css";
import "../styles/github-highlight.css";
import useStore from "@lib/store";

export default function MyApp({ Component, pageProps }: AppProps) {
  const { setDark, setLight } = useStore();
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      setDark();
    } else {
      localStorage.theme = "light";
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      setLight();
    }
  }, []);
  return <Component {...pageProps} />;
}
