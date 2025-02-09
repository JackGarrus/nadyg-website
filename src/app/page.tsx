"use client";

import s from "./page.module.css";
import { motion, MotionConfig } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import Page from "./components/Page";
import Card from "./components/Card";

export default function Home() {
  const [isCopied, setIsCopied] = useState<boolean | undefined>(undefined);

  const copy = (text: string): void => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
  };

  return (
    <>
      <Page>
        <section className={s.yapSection}>
          {/* Siccome è il nome del sito-startup stilizzalo diversamente */}
          <motion.h1
            className="h1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            Emerald Forge
          </motion.h1>
          <br />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I am <strong>Nadia G.</strong> from Berlin, a seasoned software
            engineer with 9 years of experience.
          </motion.p>
          <br />
          <br />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            I consider myself a <strong>Free Internet Activist</strong>,
            passionate about the future of the internet, especially privacy,
            free access to information, and{" "}
            <strong>promoting European alternatives to Big Tech</strong>{" "}
            realities.
          </motion.p>
          <br />
          <br />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            On our blog, we write about everything from{" "}
            <strong>coding tips</strong>, <strong>productivity hacks</strong> to
            reflections on my <strong>job journey</strong> and the{" "}
            <strong>pop culture</strong> that inspires me.
          </motion.p>
          <br />
          <br />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <strong>Why emeralds?</strong>
            <br />
            Emeralds embody hope, renewal, and creativity. Their rich green hue
            symbolizes growth, love, and fresh beginnings. Celebrated for their
            healing and protective properties, emeralds inspire intuition,
            wisdom, and balance, making them the perfect emblem for
            transformation and innovation.
          </motion.p>
          <br />
          <br />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            I also work on indie apps in my spare time. I love experimenting
            with new ideas and building tools that solve problems, whether it’s
            something simple to make my life a little easier or a more complex
            project that challenges my skills.
          </motion.p>
          <br />
          <br />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            When I’m away from the screen, you’ll find me hiking through nature,
            exploring the outdoors, and tending to my plants.
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
        </section>

        <section className={s.projectsSection}>
          <motion.h1
            className="h1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
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
              <Card />
              <Card />
              <Card />
              <Card />
            </MotionConfig>
          </div>
        </section>
      </Page>

      <Page>
        <section className={s.contactsSection}>
          <h1 className="h2">Let&apos;s get in touch!</h1>
          <br /> <br />
          <br />
          <p>Send me an email at:</p>
          <br />
          <div>
            <button
              className={s.email}
              onClick={() => copy("nadguar@proton.me")}
            >
              <p>nadguar@proton.me</p>
            </button>
            <span className={s.copied}>{isCopied && <span>Copied!</span>}</span>
          </div>
          <br />
          <p>or</p>
          <br />
          <div className={s.flex}>
            <p>message me on: </p>
            <a
              href="https://www.linkedin.com/in/nadia-guarracino17/"
              target="blank"
            >
              Linkedin
            </a>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <a href="https://pngtree.com/freepng/hand-drawn-green-gems-illustration_4531393.html">
            png image from pngtree.com/
          </a>
        </section>
      </Page>
    </>
  );
}
