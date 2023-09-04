import ImageUrlBuilder from "@sanity/image-";
import { client } from "./sanity";

const builder = ImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}