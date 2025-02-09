import s from "./styles/card.module.css";
import LeafIcon from "../icons/leaf";
import { motion } from "motion/react";

export default function Card() {
  return (
    <motion.div
      className={s.card}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <div className={s.cardHeader}>
        <LeafIcon className={s.projectIcon} color="#013220" />
        <h3 className="h2">Title</h3>
      </div>
      <p>description</p>
    </motion.div>
  );
}
