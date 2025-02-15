"use client";

import "@/app/style/globals.css";
import t from "@/app/style/typography.module.css";
import l from "@/app/style/layout.module.css";
import s from "@/app/components/AboutSection.module.css";
import { motion } from "motion/react";
import clsx from "clsx";

export default function AboutSection() {
  return (
    <div className={s.container}>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className={t.h1}
      >
        Hi, I am <strong>Nadia G.</strong>
      </motion.h1>

      <div className={t.tar}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={clsx(t.p, l.pt16)}
        >
          a seasoned software engineer with{" "}
          <strong>9 years of experience</strong> based in Berlin.
        </motion.p>
        <br />
        <br />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className={t.p}
        >
          On my blog, I write from <strong>coding tips</strong>,{" "}
          <strong>productivity hacks</strong> tested on me, to reflections on my{" "}
          <strong>job journey</strong>. <br />
          Time to time I also post about some pop culture topics that inspires
          me.
        </motion.p>
        <br />
        <br />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className={t.p}
        >
          I also work on indie apps in my spare time. I love experimenting with
          new ideas and building tools that solve problems, whether it’s
          something simple to make my life a little easier or a more complex
          project that challenges my skills.
        </motion.p>
        <br />
        <br />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className={t.p}
        >
          When I’m away from the screen, you’ll find me hiking through nature,
          exploring the outdoors, and making electronic music.
        </motion.p>
        <br />
        <br />
        <div className={s.linksContainer}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
            className={s.link}
          ></motion.div>
        </div>
      </div>
    </div>
  );
}
