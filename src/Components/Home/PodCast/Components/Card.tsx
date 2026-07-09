import { Play, X } from "lucide-react";
import { useState } from "react";
type cardProps={
  src:string;
  title:string;
  videoId:string;

}
const Card = ({src,title,videoId}:cardProps) => {
  const [isOpen,isSetOpen]=useState(false)
  return (
  <>
    <div className="relative flex-1 rounded-2xl overflow-hidden
          hover:shadow-xl transition-transfer duration-300
          ">
            <img
              src={src}
              alt="Thumnail of yt Video"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 
            bg-gradient-to-t from-[#3F8CB5]/80 via-[#296585]/50 to=[#296585]/40" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-red-500 
            flex items-center justify-center 
            hover:scale-110 transition-transform"
            onClick={()=>isSetOpen(true)}>
            <Play className="w-6 h-6 text-white ml-1" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white font-[1000] text-2xl mb-2">
             {title}
            </div>
      {/*Vide Play */}
      {isOpen && (
        <div className="fixed inset-0 z-[99999] bg-black/80 flex items-center justify-center" onClick={() => isSetOpen(false)}>
          <div className="relative w-full max-w-3xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <X className="absolute -top-8 right-0 text-white cursor-pointer" onClick={() => isSetOpen(false)} />
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              allow="autoplay"
              allowFullScreen
            />
          </div>
        </div>
      )}
      </div>
   
   </>
  );
};

export default Card;