interface SocialMediaProps{
    link: string;
    title: string;
    svg: string
}

export default function SocialMedia({link, title, svg}: SocialMediaProps){
    return (
      <a
        href={link}
        target="_blank"
        className="focus-outline block"
        aria-label={title}
        title={title}
      >
        <img src={svg} alt={title} className="w-6 h-6"/>
      </a>
    );
}