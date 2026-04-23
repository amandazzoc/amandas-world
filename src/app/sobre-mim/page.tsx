'use client'
import Image from "../../components/Image";

export default function Sobre() {
  return (
    <section className="flex flex-col gap-10 md:gap-14 w-full max-w-7xl mx-auto py-8">
      <h1 className="font-family-secondary md:text-5xl text-4xl text-center">
        Sobre mim
      </h1>
      
      <div className="flex flex-col lg:flex-row lg:items-start items-center gap-10 lg:gap-12">
        <div className="w-[90%] lg:w-1/2 flex flex-col gap-8">
          <div className="flex flex-col gap-4 text-base leading-relaxed text-gray-200">
            <p>
              Desde pequena, sempre fui apaixonada por tecnologia e pelo lado
              mais artístico das coisas. Aos 14 anos, comecei minha jornada na
              área ao entrar na ETEC, onde fiz o Ensino Médio junto com o
              Técnico em Desenvolvimento de Sistemas. Assim que me formei,
              segui direto para a faculdade, cursando Desenvolvimento de
              Software Multiplataforma na FATEC.
            </p>
            <p>
              Além de estudar e programar, amo estar envolvida na comunidade
              tech. Tive a oportunidade de ajudar a organizar a 3° e 4° edição do
              Para Elas, um evento incrível voltado para mulheres na
              programação. Também participei de um projeto de APEX na Oracle,
              onde conquistei o 1° lugar entre os projetos da minha turma.
            </p>
            <p>
              Recentemente, participei do PORTO HACK Santos 2025, um dos
              principais eventos de ideação para soluções portuárias do país.
              Meu grupo, formado apenas por mulheres, ficamos entre as 10
              finalistas! Foram 3 dias intensos, virando a noite para fazer
              isso acontecer, utilizando n8n para desenvolver nossa solução.
            </p>
            <p>
              Também desenvolvi meu projeto integrador, o FocusQuest, uma
              plataforma digital gamificada desenvolvida para auxiliar na
              identificação de possíveis indícios do Transtorno de Déficit de
              Atenção (TDA) em adultos.
            </p>
            <p>
              Meu fascínio por tecnologia sempre andou lado a lado com a minha
              veia de artística. Desde sempre gostei de criar, e foi assim que
              me apaixonei pelo Front-end e UI/UX. Amo transformar minhas
              ideias em interfaces bonitas, intuitivas e funcionais. Gosto de
              desenhar sistemas, landing pages, ilustrações digitais e artes
              para o instagram (além de ter uma loja de artesanato e expressar
              minha criatividade também no crochê e impressão 3d :D).
            </p>
            <p>
              Hoje, meu foco é se aprofundar mais nas técnologias atuais de
              front-end para assim, construir experiências digitais que sejam
              bonitas e fáceis de usar, combinando código e design para criar
              soluções que façam a diferença sempre pensando no usuário final.
            </p>
          </div>

          <div>
            <a
              href="/img/CV.pdf"
              target="_blank"
              className="inline-flex w-fit justify-center items-center py-3 px-8 border border-[var(--secondary)] rounded-full hover:bg-[var(--secondary)] hover:text-black transition-all duration-300 gap-3 group"
              aria-label="Ver Currículo"
              title="Ver Currículo"
            >
              <img
                src="/img/arrows.svg"
                alt="Ícone de Setas"
                className="w-[14px] group-hover:scale-110 transition-transform"
              />
              <span className="font-medium">Ver CV</span>
            </a>
          </div>
        </div>
        <div className="w-[90%] lg:w-1/2 columns-1 sm:columns-2 gap-4 space-y-4">
          <Image
            link="/img/oracle.png"
            legenda="1° lugar entre os projetos de APEX na Oracle"
          />
          <Image
            link="/img/evento.png"
            legenda="Apresentação do projeto integrador no HUBTEC'24 - Fatec Registro"
          />
          <Image
            link="/img/paraelas.png"
            legenda="Evento da 3° edição do {Para Elas}"
          />
          <Image
            link="/img/paraelas4.png"
            legenda="Evento da 4° edição do {Para Elas}"
          />
          <Image
            link="/img/portohack.png"
            legenda="PORTO HACK Santos 2025 - Top 10 finalistas"
          />
          <Image
            link="/img/focusquest.png"
            legenda="FocusQuest - Plataforma gamificada para identificação de TDA"
          />
        </div>
        
      </div>
    </section>
  );
}