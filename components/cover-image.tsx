import Image from "next/image";

type Props = {
  title: string;
  src: string;
};

const CoverImage = ({ title, src }: Props) => {
  const image = src ? (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className="shadow-sm rounded "
      width={16}
      height={9}
      layout="responsive"
      objectFit="cover"
      quality={100}
    />
  ) : null;
  return <div className="sm:mx-0">{image}</div>;
};

export default CoverImage;
