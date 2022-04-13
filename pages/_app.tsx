import { AppProps } from "next/app";
import { useEffect } from "react";
import "../styles/index.css";
import "../styles/github-markdown.css";
import "../styles/github-highlight.css";
import useStore from "@lib/store";

export default function MyApp({ Component, pageProps }: AppProps) {
  const { theme, setDark, setLight } = useStore();
  useEffect(() => {
    if (
      theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      setDark();
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      setLight();
    }
  }, []);
  return <Component {...pageProps} />;
}
