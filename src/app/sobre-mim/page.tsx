'use client'
import Image from "../../components/Image";

export default function Sobre() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <h1 className="font-family-secondary md:text-5xl text-4xl text-center">
          Sobre mim
        </h1>
        <div className="flex lg:flex-row lg:items-start lg:gap-0 flex-col items-center gap-9">
          <div className="lg:w-[50%] w-[90%] flex flex-col gap-6 ">
            <div>
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
                tech. Tive a oportunidade de ajudar a organizar a 3° edição do
                Para Elas, um evento incrível voltado para mulheres na
                programação. Também participei de um projeto de APEX na Oracle,
                onde conquistei o 1° lugar entre os projetos da minha turma.
              </p>
              <p>
                Meu fascínio por tecnologia sempre andou lado a lado com a minha
                veia de artística. Desde sempre gostei de criar, e foi assim que
                me apaixonei pelo Front-end e UI/UX. Amo transformar minhas
                ideias em interfaces bonitas, intuitivas e funcionais. Gosto de
                desenhar sistemas, landing pages, ilustrações digitais e artes
                para o instagram (além de ter uma loja de artesanato e expressar
                minha criatividade também no crochê :D).
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
                
                className=" flex w-40 justify-center items-center text-center py-3 px-11 border border-[var(--secondary)] rounded-full focus-outline gap-2 "
                aria-label="Ver Currículo"
                title="Ver Currículo"
              >
                <img
                  src="/img/arrows.svg"
                  alt="Icone de Setas"
                  className="w-[14px]"
                />
                <span>Ver CV</span>
              </a>
            </div>
          </div>
          <div className="flex lg:flex-col lg:w-[50%] gap-8 flex-wrap justify-center">
            <Image
              link="/img/oracle.png"
              legenda="1° lugar entre os projetos de APEX na Oracle"
            />
            <Image
              link="/img/evento.png"
              legenda="Apresentação do projeto integrador no HUBTEC’24 - Fatec Registro"
            />
            <Image
              link="/img/paraelas.png"
              legenda="Evento da 3° edição do {Para Elas}"
            />
          </div>
        </div>
      </div>
    </>
  );
}
