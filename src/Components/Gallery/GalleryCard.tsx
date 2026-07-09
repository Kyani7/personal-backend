type Props = {
  image: string;
  title: string;
};

const GalleryCard = ({ image, title }: Props) => {
  return (
    <div className="group relative cursor-pointer overflow-hidden rounded-xl border border-line bg-white">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/85 via-ink/0 to-transparent opacity-0 transition duration-500 group-hover:opacity-100">
        <span className="m-6 flex items-center gap-2 font-medium text-accent-100">
          View Collection
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            &rarr;
          </span>
        </span>
      </div>

      <div className="p-5">
        <h3 className="font-display text-lg font-medium text-ink">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default GalleryCard;