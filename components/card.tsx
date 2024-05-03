import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  imageWidth?: number;
  imageHeight?: number;
  href: string;
}

const Card: FC<CardProps> = ({
  title,
  description,
  imageUrl,
  imageWidth = 1000,
  imageHeight = 300,
  href,
}) => {
  return (
    <Link href={href} passHref>
      <div className="rounded overflow-hidden shadow-lg block cursor-pointer">
        {imageUrl && (
          <div className="relative w-full h-auto">
            <Image
              src={imageUrl}
              alt={title}
              width={imageWidth}
              height={imageHeight}
              className="object-cover w-full h-full"
            />
          </div>
        )}
        <div className="px-6 py-4 bg-gray-100">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
