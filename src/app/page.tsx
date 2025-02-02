"use client";
import s from "./page.module.css";

export default function Home() {
  return (
    <div className={s.page}>
      <div className={s.container}>
        <section className={s.yapSection}>
          {/* Siccome è il nome del sito-startup stilizzalo diversamente */}
          <h1 className={s.h1}>Emerald Forge</h1>
          <br />
          <p className={s.paragraph}>
            Hi, I’m Nadia G, an indie app developer from Berlin. Check out my
            productivity and creative apps.
          </p>
          {/* Come si creano i link in nextjs? */}
          <a>Blog</a>
        </section>

        <section className={s.projectsSection}>
          <h1 className={s.h1}>Projects</h1>
          <br />

          <div className={s.cardsContainer}>
            <div className={s.card}>
              <h3 className={s.h2}>Project 1</h3>
              {/* Backgorund img  o come uzu.works */}
              <p className={s.paragraph}>blbablabalba</p>
            </div>

            <div className={s.card}>
              <h3 className={s.h2}>Project 1</h3>
              {/* Backgorund img  o come uzu.works */}
              <p className={s.paragraph}>blbablabalba</p>
            </div>

            <div className={s.card}>
              <h3 className={s.h2}>Project 1</h3>
              {/* Backgorund img  o come uzu.works */}
              <p className={s.paragraph}>blbablabalba</p>
            </div>

            <div className={s.card}>
              <h3 className={s.h2}>Project 1</h3>
              {/* Backgorund img  o come uzu.works */}
              <p className={s.paragraph}>blbablabalba</p>
            </div>

            <div className={s.card}>
              <h3 className={s.h2}>Project 1</h3>
              {/* Backgorund img  o come uzu.works */}
              <p className={s.paragraph}>blbablabalba</p>
            </div>

            <div className={s.card}>
              <h3 className={s.h2}>Project 1</h3>
              {/* Backgorund img  o come uzu.works */}
              <p className={s.paragraph}>blbablabalba</p>
            </div>

            <div className={s.card}>
              <h3 className={s.h2}>Project 1</h3>
              {/* Backgorund img  o come uzu.works */}
              <p className={s.paragraph}>blbablabalba</p>
            </div>

            <div className={s.card}>
              <h3 className={s.h2}>Project 1</h3>
              {/* Backgorund img  o come uzu.works */}
              <p className={s.paragraph}>blbablabalba</p>
            </div>

            <div className={s.card}>
              <h3 className={s.h2}>Project 1</h3>
              {/* Backgorund img  o come uzu.works */}
              <p className={s.paragraph}>blbablabalba</p>
            </div>

            <div className={s.card}>
              <h3 className={s.h2}>Project 1</h3>
              {/* Backgorund img  o come uzu.works */}
              <p className={s.paragraph}>blbablabalba</p>
            </div>

            <div className={s.card}>
              <h3 className={s.h2}>Project 1</h3>
              {/* Backgorund img  o come uzu.works */}
              <p className={s.paragraph}>blbablabalba</p>
            </div>

            <div className={s.card}>
              <h3 className={s.h2}>Project 1</h3>
              {/* Backgorund img  o come uzu.works */}
              <p className={s.paragraph}>blbablabalba</p>
            </div>

            <div className={s.card}>
              <h3 className={s.h2}>Project 1</h3>
              {/* Backgorund img  o come uzu.works */}
              <p className={s.paragraph}>blbablabalba</p>
            </div>
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
