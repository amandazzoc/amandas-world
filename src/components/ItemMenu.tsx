interface ItemMenuProps {
  number: string;
  text: string;
  link: string;
  sessao: string
}

export default function ItemMenu({ number, text, link, sessao }: ItemMenuProps) {
  return (
    <li>
      <a
        href={link}
        className="lg:text-6xl md:text-5xl text-4xl font-family-secondary transition-colors duration-300 hover:text-[var(--secondary)] focus-outline block"
        aria-label={sessao}
        title={sessao}
      >
        <span className="lg:text-4xl md:text-3xl text-2xl text-[var(--secondary)]">
          {number}
        </span>{" "}
        {text}
      </a>
    </li>
  );
}