const experiences = [
  {
    title: "Desenvolvedora Front-end JR",
    enterprise: "Devnation",
    year: "2025",
    description:
      "Desenvolvi aplicações web com React e Next.js, proporcionando uma experiência de usuário mais intuitiva e eficiente. Colaboro remotamente com equipes de desenvolvimento, garantindo a entrega pontual dos projetos.",
  },
  {
    title: "Estagiária de IA & ML",
    enterprise: "Compass UOL",
    year: "2024",
    description:
      "Desenvolvi projetos de Inteligência Artificial e Machine Learning utilizando Node.js, JavaScript, Python, Docker e AWS. Apliquei os conhecimentos adquiridos em cursos da Udemy disponibilizados pela empresa para criar soluções eficientes.",
  },
  {
    title: "Monitora Oracle APEX",
    enterprise: "FATEC Registro",
    year: "2024",
    description:
      "Ensinei os princípios básicos e o uso do Oracle APEX aos alunos do 1º semestre de Desenvolvimento de Software Multiplataforma, aprimorando minhas habilidades na ferramenta e em PL/SQL.",
  },
  {
    title: "Técnica de Informática",
    enterprise: "Plano Angelus",
    year: "2024",
    description:
      "Adquiri experiência com assistência técnica aos usuários e helpdesk. Minha responsabilidade incluía resolver problemas relacionados a hardware, software e redes de maneira eficaz. ",
  },
];

export default function Experiencias() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <h1 className="font-family-secondary md:text-5xl text-4xl text-center">
          Experiências
        </h1>
        <section className="md:flex gap-4 hidden">
          <div className="flex flex-col w-[49%] lg:gap-28 gap-28">
            {experiences.map((exp, index) => (
              <div key={index} className="flex items-center justify-between ">
                <div>
                  <h1 className="lg:text-3xl text-2xl font-family-secondary">
                    {exp.title}
                  </h1>
                  <p className="lg:text-xl text-lg text-[var(--secondary)] font-semibold">
                    {exp.enterprise}
                  </p>
                </div>
                <div>
                  <p className="lg:text-4xl text-3xl font-family-secondary">
                    {exp.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="relative w-1 bg-[var(--secondary)] rounded-full left-[-2px] line">
            <div className="absolute bottom-0 left-[-2px] w-2 h-2 bg-[var(--secondary)] rotate-45"></div>
          </div>
          <div className="flex flex-col w-[49%] lg:gap-16 gap-12">
            {experiences.map((exp, index) => (
              <p key={index} className="lg:text-lg text-base">
                {exp.description}
              </p>
            ))}
          </div>
        </section>
        <section className="flex gap-4 md:hidden">
          <div className="relative w-2 bg-[var(--secondary)] rounded-full  line">
            <div className="absolute bottom-0 left-[-3px] w-2 h-2 bg-[var(--secondary)] rotate-45"></div>
          </div>
          <div className="flex flex-col gap-8">
            {experiences.map((exp, index) => (
              <div key={index}>
                <div className="flex items-center justify-between ">
                  <div>
                    <h1 className="text-xl font-family-secondary">
                      {exp.title}
                    </h1>
                    <p className="text-[var(--secondary)] font-semibold">
                      {exp.enterprise}
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-family-secondary">{exp.year}</p>
                  </div>
                </div>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
