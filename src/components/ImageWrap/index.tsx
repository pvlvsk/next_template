import Image from "next/image";
import { IImageWrap } from "./types";

import styles from "./styles.module.scss";

export const ImageWrap = ({
  priority = false,
  fill = true,
  image,
  alt,
}: IImageWrap) => {
  return (
    <div className={styles.image_wrap}>
      <Image
        src={image}
        alt={alt}
        priority={priority}
        quality={80}
        placeholder="blur"
        fill={fill}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{
          objectFit: "contain",
        }}
      />
    </div>
  );
};
