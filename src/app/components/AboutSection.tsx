"use client";

import "@/app/style/globals.css";
import t from "@/app/style/typography.module.css";
import s from "@/app/components/AboutSection.module.css";
import { motion } from "motion/react";
import Image from "next/image";
import clsx from "clsx";
import Linkedin from "../icons/Linkedin";
import Github from "../icons/Github";
import Link from "next/link";
import l from "@/app/style/layout.module.css";

export default function AboutSection() {
  return (
    <div className={s.container}>
      <div className={s.aboutImage}>
        <Image src="/profile.jpg" alt="Profile" width={200} height={200} />
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className={clsx(t.aboutTitle, t.highlight)}
        >
          Nadia Guarracino
        </motion.h1>
        <br />
        <h2>Full-Stack Engineer @Doctolib</h2>
      </div>
      <br />
      <div className={s.aboutDescription}>
        <p className={t.aboutParagraph}>
          I have been building for the web since 2019, and my current stack
          includes <span className={t.highlight}>React</span>,
          <span className={t.highlight}>Ruby on Rails</span>, and
          <span className={t.highlight}>PostgreSQL</span>.
        </p>
        <br />
        <p className={t.aboutParagraph}>
          In this blog, I share what I learn, practical experiences, real-world
          solutions, and interesting resources related to web developmentall
          delivered clearly and without fluff.
        </p>
        <br />
        <p className={t.aboutParagraph}>
          I get straight to the point, and you’ll always walk away having
          learned something useful, promise 😉!
        </p>
        <br />
        <div className={s.contacts}>
          <Link
            key="/linkedin"
            href="https://www.linkedin.com/in/nadia-guarracino17/"
            target="blank"
            className={s.link}
          >
            <Linkedin className="icon" />
          </Link>
          <Link
            key="/github"
            href="https://github.com/JackGarrus"
            target="blank"
            className={clsx(s.link, l.pl8)}
          >
            <Github className="icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}
