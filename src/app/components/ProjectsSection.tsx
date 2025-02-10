import "./../globals.css";
import s from "./styles/projectsSection.module.css";
import t from "./../typography.module.css";
import Card from "./Card";
import { motion, MotionConfig } from "motion/react";

export default function ProjectsSection() {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className={t.h1}
      >
        Projects
      </motion.h1>
      <br />

      <div className={s.cardsContainer}>
        <MotionConfig transition={{ duration: 0.4, ease: "easeInOut" }}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </MotionConfig>
      </div>
    </>
  );
}
