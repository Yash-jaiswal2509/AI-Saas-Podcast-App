import Image from "next/image";

interface PodcastCardProps {
  imagUrl: string;
  description: string;
  title: string;
  podcastId: number;
}

const PodcastCard = ({
  imagUrl,
  description,
  title,
  podcastId,
}: PodcastCardProps) => {
  return (
    <div className="cursor-pointer p-2">
      <figure className="flex flex-col gap-2">
        <Image
          src={imagUrl}
          width={174}
          height={174}
          alt={title}
          className="aspect-square h-fit w-full rounded-xl 2xl:size-[200px] object-fill"
        />
        <div className="flex flex-col">
          <h1 className="text-16 truncate font-bold text-white-1">{title}</h1>
          <h2 className="text-12 truncate font-normal capitalize text-white-4">
            {description}
          </h2>
        </div>
      </figure>
    </div>
  );
};

export default PodcastCard;
