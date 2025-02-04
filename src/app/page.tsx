export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-8">
        <section className="flex flex-col text-center gap-4 items-center">
          <p className="font-bold md:text-lg text-[var(--secondary)]">
            OLÁ! ME CHAMO AMANDA
          </p>
          <h1 className="font-family-secondary md:text-6xl text-4xl">
            Desenvolvedora Web & UI/UX Designer
          </h1>
          <p className="md:text-2xl text-lg font-light lg:w-[40vw]">
            Crio interfaces intuitivas, designs criativos & modernos e
            experiências que fazem a diferença!
          </p>
        </section>
        <div className="flex gap-16 justify-center">
          <a
            href=""
            aria-label="Ver meus projetos"
            title="Ver meus projetos"
            className="block focus-outline"
          >
            <div className="flex items-center gap-2">
              <img
                src="/img/arrows.svg"
                alt="Icone de Setas"
                className="w-[14px]"
              />
              <p className="font-family-secondary md:text-2xl text-xl ">
                Meus projetos
              </p>
            </div>
          </a>
          <a
            href=""
            aria-label="Sobre mim"
            title="Sobre mim"
            className="block focus-outline"
          >
            <div className="flex items-center gap-2">
              <img
                src="/img/arrows.svg"
                alt="Icone de Setas"
                className="w-[14px]"
              />
              <p className="font-family-secondary md:text-2xl text-xl">
                Sobre mim
              </p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
