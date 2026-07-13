interface ImageSectionProps {
  image: string;
  caption: string;
  alt: string;
}

export default function ImageSection({
  image,
  caption,
  alt,
}: ImageSectionProps) {
  return (
    <div className="relative mb-5 overflow-hidden rounded-xl shadow-lg">
      <img
        src={image}
        alt={alt}
        loading="lazy"
        className="h-[240px] w-full object-cover sm:h-[340px] lg:h-[520px]"
      />

      <div className="absolute inset-x-0 bottom-0 bg-black/70 px-6 py-4 text-white">
        <p className="text-base font-medium leading-relaxed">
          {caption}
        </p>
      </div>
    </div>
  );
}