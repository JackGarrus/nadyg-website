"use client";

import "@/app/style/globals.css";
import t from "@/app/style/typography.module.css";
import s from "@/app/components/AboutSection.module.css";
import { motion } from "motion/react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className={t.h1}
      >
        Emerald Forge
      </motion.h1>
      <br />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className={t.p}
      >
        Hi, I am <strong>Nadia G.</strong> from Berlin, a seasoned software
        engineer with 9 years of experience.
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
        <strong>productivity hacks</strong> tested on me, to reflections on my
        <strong>job journey</strong>. <br />
        Time to time I also post about some <strong>pop culture</strong> topics
        that inspires me.
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
        new ideas and building tools that solve problems, whether it’s something
        simple to make my life a little easier or a more complex project that
        challenges my skills.
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
        >
          <Link key="/blog" href="/blog" target="blank" className={s.link}>
            Blog
          </Link>
        </motion.div>
      </div>
    </>
  );
}
