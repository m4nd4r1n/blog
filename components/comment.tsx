import { Utterances } from "utterances-react-component";
import useStore from "@lib/store";
import { useEffect } from "react";

const Comment = () => {
  const { theme } = useStore();
  useEffect(() => {
    if (document.querySelector(".utterances-frame")) {
      const iframe =
        document.querySelector<HTMLIFrameElement>(".utterances-frame");

      if (!iframe) {
        return;
      }

      iframe?.contentWindow?.postMessage(
        {
          type: "set-theme",
          theme: theme === "dark" ? "dark-blue" : "github-light",
        },
        "https://utteranc.es"
      );
    }
  }, [theme]);
  return (
    <>
      <div className="max-w-2xl mx-auto border-b dark:border-[#21262d]" />
      <div className="mt-8 mb-12 max-w-2xl mx-auto">
        <Utterances
          repo="m4nd4r1n/blog"
          theme={theme === "dark" ? "dark-blue" : "github-light"}
          issueTerm="title"
        />
      </div>
    </>
  );
};

export default Comment;
