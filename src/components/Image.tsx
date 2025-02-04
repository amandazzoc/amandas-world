import { div } from "framer-motion/client";

interface ImageProps{
    link:string;
    legenda:string
}
export default function Image({link, legenda}: ImageProps){
    return (
      <div className="flex flex-col items-center gap-2 lg:w-auto w-[200px]">
        <img src={link} alt={legenda} className="md:w-64 w-48"/>
        <p className="lg:text-base text-sm text-center">{legenda}</p>
      </div>
    );
}