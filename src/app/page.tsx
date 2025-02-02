"use client";

import s from "./page.module.css";
// import { Card } from "./ui/Card";
import LeafIcon from "./icons/leaf";
import Tree from "./icons/tree";
import { motion, MotionConfig } from "motion/react";

export default function Home() {
  return (
    <div className={s.page}>
      <div className={s.container}>
        <section className={s.yapSection}>
          {/* Siccome è il nome del sito-startup stilizzalo diversamente */}
          <h1 className="h1">Emerald Forge</h1>
          <br />

          <p className="paragraph">
            Hi, I am <strong>Nadia G.</strong> from Berlin, a seasoned software
            engineer with 9 years of experience @ Doctolib.
            <br />
            <br />I also work on indie apps in my spare time. I love
            experimenting with new ideas and building tools that solve problems,
            whether it’s something simple to make my life a little easier or a
            more complex project that challenges my skills.
            <br />
            <br />
            On my blog, I write about everything from{" "}
            <strong>coding tips</strong>, <strong>productivity hacks</strong> to
            reflections on my <strong>job journey</strong> and the{" "}
            <strong>pop culture</strong> that inspires me.
            <br />
            <br />I consider myself a <strong>Free Internet Activist</strong>,
            passionate about the future of the internet, especially privacy,
            free access to information, and{" "}
            <strong>finding European alternatives to Big Tech</strong>.
            <br />
            <br />
            When I’m away from the screen, you’ll find me hiking through nature,
            exploring the outdoors, and tending to my plants.
            <br />
            <br />
            <br />
            Currently learning? Linux
            <br />
            Favourite Berliner park? Wulheide
            <br />
            Favourite color? Forest green
            <span>
              <Tree className={s.projectIcon} color="#013220" />
            </span>
          </p>
          {/* Come si creano i link in nextjs? */}
          <br />
          <br />
          <div className={s.linksContainer}>
            <a className={s.link}>Blog</a>
            <a
              className={s.link}
              href="https://nadiaguarracino.vercel.app/about"
              target="_blank"
            >
              My CV website
            </a>
          </div>
        </section>

        <section className={s.projectsSection}>
          <h1 className="h1">Projects</h1>
          <br />
          <div className={s.cardsContainer}>
            <MotionConfig transition={{ duration: 0.4, ease: "easeInOut" }}>
              <motion.div
                className={s.card}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <div className={s.cardHeader}>
                  <LeafIcon className={s.projectIcon} color="#013220" />
                  <h3 className="h2">Project 1</h3>
                </div>
                <p className="paragraph">blbablabalba</p>
              </motion.div>

              <motion.div
                className={s.card}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className={s.cardHeader}>
                  <LeafIcon className={s.projectIcon} color="#013220" />
                  <h3 className="h2">Project 1</h3>
                </div>
                <p className="paragraph">blbablabalba</p>
              </motion.div>

              <motion.div
                className={s.card}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className={s.cardHeader}>
                  <LeafIcon className={s.projectIcon} color="#013220" />
                  <h3 className="h2">Project 1</h3>
                </div>
                <p className="paragraph">blbablabalba</p>
              </motion.div>

              <motion.div
                className={s.card}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className={s.cardHeader}>
                  <LeafIcon className={s.projectIcon} color="#013220" />
                  <h3 className="h2">Project 1</h3>
                </div>
                <p className="paragraph">blbablabalba</p>
              </motion.div>

              <motion.div
                className={s.card}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className={s.cardHeader}>
                  <LeafIcon className={s.projectIcon} color="#013220" />
                  <h3 className="h2">Project 1</h3>
                </div>
                <p className="paragraph">blbablabalba</p>
              </motion.div>

              <motion.div
                className={s.card}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className={s.cardHeader}>
                  <LeafIcon className={s.projectIcon} color="#013220" />
                  <h3 className="h2">Project 1</h3>
                </div>
                <p className="paragraph">blbablabalba</p>
              </motion.div>

              <motion.div
                className={s.card}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <div className={s.cardHeader}>
                  <LeafIcon className={s.projectIcon} color="#013220" />
                  <h3 className="h2">Project 1</h3>
                </div>
                <p className="paragraph">blbablabalba</p>
              </motion.div>

              <motion.div
                className={s.card}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className={s.cardHeader}>
                  <LeafIcon className={s.projectIcon} color="#013220" />
                  <h3 className="h2">Project 1</h3>
                </div>
                <p className="paragraph">blbablabalba</p>
              </motion.div>

              <motion.div
                className={s.card}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <div className={s.cardHeader}>
                  <LeafIcon className={s.projectIcon} color="#013220" />
                  <h3 className="h2">Project 1</h3>
                </div>
                <p className="paragraph">blbablabalba</p>
              </motion.div>
            </MotionConfig>
          </div>
        </section>
      </div>

      <footer className={s.footer}>
        {/* Icon */}
        Made by Nadia G.
        {/* Icon */}
      </footer>
    </div>
  );
}
