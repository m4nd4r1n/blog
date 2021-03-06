import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Author from "../types/author";
import { useRouter } from "next/router";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  const router = useRouter();
  return (
    <div
      className="cursor-pointer hover:animate-pulse focus:animate-pulse"
      onClick={() => router.push(`/posts/${slug}`)}
      tabIndex={1}
      onKeyPress={(e) =>
        e.code === "Enter" ? router.push(`/posts/${slug}`) : null
      }
    >
      <div className="mb-5 relative h-64 w-full">
        <CoverImage title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">{title}</h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
};

export default PostPreview;
