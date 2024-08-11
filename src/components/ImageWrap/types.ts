import { StaticImageData } from "next/image";

export interface IImageWrap {
  priority?: boolean;
  image: StaticImageData;
  alt: string;
  fill?: boolean;
}
