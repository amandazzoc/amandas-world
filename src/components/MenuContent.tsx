import { motion } from "framer-motion";
import ItemMenu from "./ItemMenu";

export default function MenuContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="text-center"
    >
      <div className="flex justify-center">
        <ul className="flex flex-col gap-8 text-start">
          <ItemMenu number="01" text="HOME" link="#" sessao="Home"/>
          <ItemMenu number="02" text="SOBRE MIM" link="#" sessao="Sobre mim"/>
          <ItemMenu number="03" text="HABILIDADES" link="#" sessao="Habilidades"/>
          <ItemMenu number="04" text="EXPERIÊNCIAS" link="#" sessao="Experiências"/>
          <ItemMenu number="05" text="PROJETOS" link="#" sessao="Projetos"/>
        </ul>
      </div>
    </motion.div>
  );
}
