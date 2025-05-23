import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Video`.
 */
export type VideoProps = SliceComponentProps<Content.VideoSlice>;

/**
 * Component for "Video" Slices.
 */
const Video: FC<VideoProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-black"
    >
      <h2 className="sr-only">
        Cote Royale Video Reel
      </h2>
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${slice.primary.youtube_video_id}?autoplay=1&mute=1&loop=1&playlist=${slice.primary.youtube_video_id}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        className="pointer-events-none absolute left-1/2 aspect-video h-full -translate-x-1/2"
      />
    </section>
  );
};

export default Video;
