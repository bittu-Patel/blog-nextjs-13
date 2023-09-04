import ImageUrlBuilder from "@sanity/image-U";
import { client } from "./sanity";

const builder = ImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}