interface CardProps {
  img: string;
  descricao: string;
  mais: string;
  link: string;
}
export default function Card({ img, descricao, mais, link }: CardProps) {
  return (
    <div className="relative group w-fit rounded-[22px]">
      <a
        href={link}
        aria-label={`Projeto ${descricao}`}
        title={`Projeto ${descricao}`}
        target="_blank"
      >
        <img
          src={img}
          alt={`Projeto ${descricao}`}
          className="w-auto h-auto "
        />

        <div className="absolute inset-0 bg-slate-800/65 backdrop-blur-sm flex items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:rounded-[22px] rounded-[20px] p-6 flex-col justify-between">
          <p className="text-[var(--font-card)] md:text-lg  font-semibold">
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
