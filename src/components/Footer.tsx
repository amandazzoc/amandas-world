import SocialMedia from "./SocialMedia";
import { socialMedias } from "@/data/socialMedias";

export default function Footer(){
    return (
      <>
        <div className="flex gap-12 justify-center items-center md:pt-12 pt-8 lg:pb-[10vh] lg:px-[18.5vw] md:pb-28 md:px-8 pb-14 px-4">
          {socialMedias.map((sm, index) => (
            <SocialMedia key={index} link={sm.link} title={sm.title} svg={sm.svg}/>
          ))}
        </div>
      </>
    );
}