interface CardProps {
  img: string;
  descricao: string;
  mais: string;
  link: string;
}

export default function Card({ img, descricao, mais, link }: CardProps) {
  return (
    <div className="relative group w-full aspect-video rounded-[22px] overflow-hidden bg-neutral-800/30">
      <a
        href={link}
        aria-label={`Projeto ${descricao}`}
        title={`Projeto ${descricao}`}
        target="_blank"
        className="block w-full h-full"
      >
        <img
          src={img}
          alt={`Projeto ${descricao}`}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-slate-800/80 backdrop-blur-sm flex items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex-col justify-between">
          <p className="text-[var(--font-card)] md:text-lg font-semibold">
            {descricao}
          </p>
          <p className="text-[var(--font-card)] md:text-xl text-lg font-semibold">
            {mais}
          </p>
        </div>
      </a>
    </div>
  );
}