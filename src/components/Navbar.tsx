'use client'
interface NavbarProps{
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void
}

export default function Navbar({menuOpen, setMenuOpen}: NavbarProps){
    return (
      <>
        <nav className="flex justify-between md:pb-10 pb-6 fixed-top lg:pt-[10vh] lg:px-[18.5vw] md:pt-28 md:px-8 pt-14 px-4">
          <div className="flex items-center gap-2">
            <img
              className="md:w-12 w-11"
              src="/img/amanda.png"
              alt="Selfie de perfil da Amanda"
            />
            <p className="font-bold">Amanda Oliveira</p>
            <img
              className="md:w-auto w-5"
              src="/img/verified.svg"
              alt="Icone de verificado"
            />
          </div>
          <div className="flex items-center md:gap-6 gap-3">
            <img
              className="md:w-auto w-12"
              src="/img/dark.svg"
              alt="Icone para alterar para light mode"
            />
            <img
              className={`md:w-auto w-12 transition-transform duration-300 ${
                menuOpen ? "rotate-0" : "rotate-90"
              }`}
              src="/img/menu.svg"
              alt="Icone para acessar o menu de opções"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>
        </nav>
      </>
    );
}