"use client";

import "@/app/style/globals.css";
import t from "@/app/style/typography.module.css";
import s from "@/app/components/AboutSection.module.css";
import { motion } from "motion/react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <div className={s.container}>
      <Image src="/profile.jpg" alt="Profile" width={100} height={100} />
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className={t.h1}
      >
        Nadia Guarracino
      </motion.h1>

      <h3>Full-Stack Engineer @Doctolib</h3>
    </div>
  );
}
