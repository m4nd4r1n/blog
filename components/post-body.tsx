import ReactMarkDown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import latex from "highlight.js/lib/languages/latex";
import rehypeRaw from "rehype-raw";

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="markdown-body">
        <ReactMarkDown
          children={content}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[
            [rehypeHighlight, { languages: { latex: latex } }],
            [rehypeRaw],
          ]}
        />
      </div>
    </div>
  );
};

export default PostBody;
