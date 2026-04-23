import { div } from "framer-motion/client";

interface ImageProps{
    link:string;
    legenda:string
}
export default function Image({link, legenda}: ImageProps){
    return (
      <div className="flex flex-col items-center gap-2 w-full">
        <img src={link} alt={legenda} className="w-full aspect-square rounded-2xl object-cover"/>
        <p className="text-sm text-center">{legenda}</p>
      </div>
    );
}