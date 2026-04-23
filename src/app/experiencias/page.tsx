const experiences = [
  {
    title: "Desenvolvedora Web Front-end",
    enterprise: "Contato Seguro & Compliance Station",
    year: "2025 - 2026",
    description:
      "Desenvolvo e mantenho a arquitetura Front-end de uma plataforma SaaS utilizando React e TypeScript, focando em escalabilidade e componentização e refatorando códigos legados.",
  },
  {
    title: "Desenvolvedora Front-end",
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
    <div className="flex flex-col gap-10">
      <h1 className="font-family-secondary md:text-5xl text-4xl text-center">
        Experiências
      </h1>

      <section className="relative hidden md:flex flex-col gap-16 py-4">
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[var(--secondary)] -translate-x-1/2 rounded-full line">
          <div className="absolute -bottom-1 left-1/2 w-2 h-2 bg-[var(--secondary)] -translate-x-1/2 rotate-45"></div>
        </div>

        {experiences.map((exp, index) => (
          <div key={index} className="flex w-full items-start justify-between z-10">
            <div className="w-[calc(50%-2rem)] flex justify-between items-start text-left">
              <div>
                <h1 className="lg:text-3xl text-2xl font-family-secondary">
                  {exp.title}
                </h1>
                <p className="lg:text-xl text-lg text-[var(--secondary)] font-semibold">
                  {exp.enterprise}
                </p>
              </div>
              <div className="pl-4">
                <p className="lg:text-4xl text-3xl font-family-secondary">
                  {exp.year}
                </p>
              </div>
            </div>

            <div className="w-[calc(50%-2rem)] text-left">
              <p className="lg:text-lg text-base leading-relaxed text-gray-200">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </section>

      <section className="relative flex md:hidden flex-col gap-10 pl-6 py-2">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--secondary)] rounded-full line">
          <div className="absolute -bottom-1 left-1/2 w-2 h-2 bg-[var(--secondary)] -translate-x-1/2 rotate-45"></div>
        </div>

        {experiences.map((exp, index) => (
          <div key={index} className="flex flex-col gap-3 z-10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="text-xl font-family-secondary leading-tight">
                  {exp.title}
                </h1>
                <p className="text-[var(--secondary)] font-semibold mt-1">
                  {exp.enterprise}
                </p>
              </div>
              <div>
                <p className="text-2xl font-family-secondary">{exp.year}</p>
              </div>
            </div>
            <p className="text-base leading-relaxed text-gray-200">
              {exp.description}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}