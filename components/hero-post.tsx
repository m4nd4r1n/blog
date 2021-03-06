import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Author from "../types/author";
import { useRouter } from "next/router";
import { cls } from "@lib/utils";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  const router = useRouter();
  return (
    <section
      className="cursor-pointer hover:animate-pulse focus:animate-pulse"
      onClick={() => router.push(`/posts/${slug}`)}
      onKeyPress={(e) =>
        e.code === "Enter" ? router.push(`/posts/${slug}`) : null
      }
      tabIndex={1}
    >
      <div
        className={cls(
          "mb-8 md:mb-16 relative w-full",
          coverImage ? "h-64 md:h-[32rem]" : ""
        )}
      >
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">{title}</h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </section>
  );
};

export default HeroPost;
