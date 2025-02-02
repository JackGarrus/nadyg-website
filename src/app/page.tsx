import s from "./page.module.css";
// import { Card } from "./ui/Card";
import LeafIcon from "./icons/leaf";

export default function Home() {
  return (
    <div className={s.page}>
      <div className={s.container}>
        <section className={s.yapSection}>
          {/* Siccome è il nome del sito-startup stilizzalo diversamente */}
          <h1 className="h1">Emerald Forge</h1>
          <br />
          <p className="paragraph">
            Hi, I’m Nadia G, an indie app developer from Berlin. Check out my
            productivity and creative apps.
          </p>
          {/* Come si creano i link in nextjs? */}
          <a>Blog</a>
        </section>

        <section className={s.projectsSection}>
          <h1 className="h1">Projects</h1>
          <br />
          <div className={s.cardsContainer}>
            <div className={s.card}>
              <div className={s.cardHeader}>
                <LeafIcon className={s.projectIcon} color="#80ba27" />
                <h3 className="h2">Project 1</h3>
              </div>
              <p className="paragraph">blbablabalba</p>
            </div>

            <div className={s.card}>
              <div className={s.cardHeader}>
                <LeafIcon className={s.projectIcon} color="#80ba27" />
                <h3 className="h2">Project 1</h3>
              </div>
              <p className="paragraph">blbablabalba</p>
            </div>

            <div className={s.card}>
              <div className={s.cardHeader}>
                <LeafIcon className={s.projectIcon} color="#80ba27" />
                <h3 className="h2">Project 1</h3>
              </div>
              <p className="paragraph">blbablabalba</p>
            </div>

            <div className={s.card}>
              <div className={s.cardHeader}>
                <LeafIcon className={s.projectIcon} color="#80ba27" />
                <h3 className="h2">Project 1</h3>
              </div>
              <p className="paragraph">blbablabalba</p>
            </div>

            <div className={s.card}>
              <div className={s.cardHeader}>
                <LeafIcon className={s.projectIcon} color="#80ba27" />
                <h3 className="h2">Project 1</h3>
              </div>
              <p className="paragraph">blbablabalba</p>
            </div>

            <div className={s.card}>
              <div className={s.cardHeader}>
                <LeafIcon className={s.projectIcon} color="#80ba27" />
                <h3 className="h2">Project 1</h3>
              </div>
              <p className="paragraph">blbablabalba</p>
            </div>

            <div className={s.card}>
              <div className={s.cardHeader}>
                <LeafIcon className={s.projectIcon} color="#80ba27" />
                <h3 className="h2">Project 1</h3>
              </div>
              <p className="paragraph">blbablabalba</p>
            </div>

            <div className={s.card}>
              <div className={s.cardHeader}>
                <LeafIcon className={s.projectIcon} color="#80ba27" />
                <h3 className="h2">Project 1</h3>
              </div>
              <p className="paragraph">blbablabalba</p>
            </div>

            <div className={s.card}>
              <div className={s.cardHeader}>
                <LeafIcon className={s.projectIcon} color="#80ba27" />
                <h3 className="h2">Project 1</h3>
              </div>
              <p className="paragraph">blbablabalba</p>
            </div>

            <div className={s.card}>
              <div className={s.cardHeader}>
                <LeafIcon className={s.projectIcon} color="#80ba27" />
                <h3 className="h2">Project 1</h3>
              </div>
              <p className="paragraph">blbablabalba</p>
            </div>

            <div className={s.card}>
              <div className={s.cardHeader}>
                <LeafIcon className={s.projectIcon} color="#80ba27" />
                <h3 className="h2">Project 1</h3>
              </div>
              <p className="paragraph">blbablabalba</p>
            </div>

            <div className={s.card}>
              <div className={s.cardHeader}>
                <LeafIcon className={s.projectIcon} color="#80ba27" />
                <h3 className="h2">Project 1</h3>
              </div>
              <p className="paragraph">blbablabalba</p>
            </div>

            <div className={s.card}>
              <div className={s.cardHeader}>
                <LeafIcon className={s.projectIcon} color="#80ba27" />
                <h3 className="h2">Project 1</h3>
              </div>
              <p className="paragraph">blbablabalba</p>
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
