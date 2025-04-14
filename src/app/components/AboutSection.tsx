"use client";

import "@/app/style/globals.css";
import t from "@/app/style/typography.module.css";
import s from "@/app/components/AboutSection.module.css";
import { motion } from "motion/react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <div className={s.container}>
      <Image src="/profile.jpg" alt="Profile" width={200} height={200} />
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className={t.aboutTitle}
      >
        <br />
        <strong>Nadia Guarracino</strong>
      </motion.h1>

      <h2>Full-Stack Engineer @Doctolib</h2>
      <br />
      <p className={t.aboutParagraph}>
        I have been building for the web since 2019, and my current stack
        includes <span className={t.highlight}>React</span>,
        <span className={t.highlight}>Ruby on Rails</span>, and
        <span className={t.highlight}>PostgreSQL</span>.
      </p>
      <br />
      <p className={t.aboutParagraph}>
        In this blog, I share what I learn, practical experiences, real-world
        solutions, and interesting resources related to web development.
      </p>
      <br />
      <p className={t.aboutParagraph}>
        This is a space to document my journey — and hopefully help other
        developers along the way{" "}
      </p>
    </div>
  );
}
