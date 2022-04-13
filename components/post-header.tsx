import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import Author from "../types/author";
import { cls } from "@lib/utils";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:mb-12 md:flex flex-row items-center space-x-4">
        <Avatar name={author.name} picture={author.picture} />
        <span>|</span>
        <div className="text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
      <div
        className={cls(
          "mb-5 sm:mx-0 relative w-full",
          coverImage ? "h-96" : ""
        )}
      >
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="mb-8 mx-auto md:hidden flex flex-row items-center space-x-4">
        <Avatar name={author.name} picture={author.picture} />
        <span>|</span>
        <div className="text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
