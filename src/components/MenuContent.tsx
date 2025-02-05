import { motion } from "framer-motion";
import ItemMenu from "./ItemMenu";
import { itemMenu } from "@/data/itemMenu";

export default function MenuContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="text-center"
    >
      <div className="flex justify-center lg:mt-14 md:mt-20 mt-24">
        <ul className="flex flex-col gap-8 text-start">
          {itemMenu.map((item, index) => (
            <ItemMenu key={index} number={item.number} text={item.text} link={item.link} sessao={item.sessao} />
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
