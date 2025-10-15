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
import Codepen from "../icons/Linkedin copy";

export default function AboutSection() {
  return (
    <div className={s.container}>
      <div className={s.aboutImage}>
        <div className={s.me}>
          <Image
            src="/general/me.jpeg"
            alt="Profile"
            width={200}
            height={200}
          />
        </div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className={clsx(t.aboutTitle, t.highlight)}
        >
          Nadia Guarracino
        </motion.h1>
        <br />
        <p className={clsx(t.aboutParagraph, t.highlightText)}>
          Full-Stack Engineer @Doctolib
        </p>
      </div>
      <br />
      <div className={s.aboutDescription}>
        <p className={t.aboutParagraph}>
          I have been building for the web since 2019, and my current stack
          includes
          <span className={clsx(t.highlight, l.pt0, l.pb0, l.ml4)}>React</span>,
          <span className={clsx(t.highlight, l.pt0, l.pb0, l.ml4)}>
            Ruby on Rails
          </span>
          , and
          <span className={clsx(t.highlight, l.pt0, l.pb0, l.ml4)}>
            PostgreSQL
          </span>
          .
        </p>
        <br />
        <p className={t.aboutParagraph}>
          This is where I drop things I learn, things I break, and things I fix.
        </p>
        <br />
        <p className={t.aboutParagraph}>
          Mostly web dev, sometimes I will deep dive into other nerdy topics 😜
        </p>
        <br />
        <div>
          <div className={s.contacts}>
            <p className={clsx(t.aboutParagraph, l.pr8)}>
              Let&#39;s get in touch!
            </p>
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
            <Link
              key="/codepen"
              href="https://codepen.io/NadGu"
              target="blank"
              className={clsx(s.link, l.pl8)}
            >
              <Codepen className="icon" />
            </Link>
          </div>
        </div>
        <br />
        <i className={s.credits}>Powered by Next.js, icons by Font Awesome</i>
      </div>
    </div>
  );
}
