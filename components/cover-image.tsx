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
      layout="fill"
      objectFit="contain"
      quality={100}
      priority={true}
    />
  ) : null;
  return <>{image}</>;
};

export default CoverImage;
