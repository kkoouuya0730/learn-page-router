import React from "react";
import Image from "next/image";

type Props = {
  width?: number;
  height?: number;
  alt?: string;
  item: {
    id: string;
    name: string;
    imgSrc: string;
    description?: string;
  };
};

const ImgCard: React.FC<Props> = ({
  width = 300,
  height = 300,
  alt = "",
  item,
}) => {
  return (
    <>
      <Image
        src={item.imgSrc}
        width={width}
        height={height}
        alt={alt}
        className="rounded-lg"
      />
      <div>
        <h2 className="font-black text-lg hover:underline">
          {item.name}
        </h2>
        {item.description ? (
          <p className="font-thin text-wrap">
            {item.description.slice(0, 50)}
          </p>
        ) : (
          <p></p>
        )}
      </div>
    </>
  );
};

export default ImgCard;
