"use client";

import s from "./page.module.css";
// import { Card } from "./ui/Card";
import LeafIcon from "./icons/leaf";
import { motion, MotionConfig } from "motion/react";
import Link from "next/link";

export default function Home() {
  return (
    <div className={s.page}>
      <div className={s.container}>
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
            className="paragraph"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I am <strong>Nadia G.</strong> from Berlin, a seasoned software
            engineer with 9 years of experience @ Doctolib.
          </motion.p>
          <br />
          <br />
          <motion.p
            className="paragraph"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            I also work on indie apps in my spare time. I love experimenting
            with new ideas and building tools that solve problems, whether it’s
            something simple to make my life a little easier or a more complex
            project that challenges my skills.
          </motion.p>
          <br />
          <br />
          <motion.p
            className="paragraph"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            On my blog, I write about everything from{" "}
            <strong>coding tips</strong>, <strong>productivity hacks</strong> to
            reflections on my <strong>job journey</strong> and the{" "}
            <strong>pop culture</strong> that inspires me.
          </motion.p>
          <br />
          <br />
          <motion.p
            className="paragraph"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            I consider myself a <strong>Free Internet Activist</strong>,
            passionate about the future of the internet, especially privacy,
            free access to information, and{" "}
            <strong>finding European alternatives to Big Tech</strong>.
          </motion.p>
          <br />
          <br />
          <motion.p
            className="paragraph"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            When I’m away from the screen, you’ll find me hiking through nature,
            exploring the outdoors, and tending to my plants.
          </motion.p>
          <br />
          <br />
          <br />
          <motion.p
            className="paragraph"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Currently learning? Linux
          </motion.p>
          <br />
          <motion.p
            className="paragraph"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            Favourite Berliner park? Wulheide
          </motion.p>
          <br />
          <motion.p
            className="paragraph"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            Favourite color? Forest green
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
            <motion.a
              className={s.link}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.6 }}
              href="https://nadiaguarracino.vercel.app/about"
              target="_blank"
            >
              My CV website
            </motion.a>
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
                transition={{ delay: 0.9 }}
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
                transition={{ delay: 1.2 }}
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
                transition={{ delay: 1.5 }}
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
                transition={{ delay: 1.8 }}
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
                transition={{ delay: 2.1 }}
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
                transition={{ delay: 2.4 }}
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
                transition={{ delay: 2.7 }}
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
    </div>
  );
}
