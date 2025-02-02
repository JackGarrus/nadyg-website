import s from "./page.module.css";
// import { Card } from "./ui/Card";
import LeafIcon from "./icons/leaf";
import Tree from "./icons/tree";

export default function Home() {
  return (
    <div className={s.page}>
      <div className={s.container}>
        <section className={s.yapSection}>
          {/* Siccome è il nome del sito-startup stilizzalo diversamente */}
          <h1 className="h1">Emerald Forge</h1>
          <br />
          <p className="paragraph">
            Hi, I am Nadia G. from Berlin, a seasoned software engineer with 9
            years of experience @ Doctolib.
            <br />
            <br />I also work on indie apps in my spare time. I love
            experimenting with new ideas and building tools that solve my
            problems, whether it’s something simple to make life a little easier
            or a more complex project that challenges my skills.
            <br />
            <br />
            On my blog, I write about everything from coding tips and
            productivity hacks to reflections on my job journey and the pop
            culture that inspires me.
            <br />
            <br />
            I’m also passionate about the future of the internet, especially
            privacy, free access to information, and finding European
            alternatives to Big Tech.
            <br />
            <br />
            When I’m away from the screen, you’ll find me hiking through nature,
            exploring the outdoors, and tending to my garden. Summer in the park
            is my happy place
            <br />
            <br />
            Favourite color? Forest green{" "}
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
            <div className={s.card}>
              <div className={s.cardHeader}>
                <LeafIcon className={s.projectIcon} color="#013220" />
                <h3 className="h2">Project 1</h3>
              </div>
              <p className="paragraph">blbablabalba</p>
            </div>

            <div className={s.card}>
              <div className={s.cardHeader}>
                <LeafIcon className={s.projectIcon} color="#013220" />
                <h3 className="h2">Project 1</h3>
              </div>
              <p className="paragraph">blbablabalba</p>
            </div>

            <div className={s.card}>
              <div className={s.cardHeader}>
                <LeafIcon className={s.projectIcon} color="#013220" />
                <h3 className="h2">Project 1</h3>
              </div>
              <p className="paragraph">blbablabalba</p>
            </div>

            <div className={s.card}>
              <div className={s.cardHeader}>
                <LeafIcon className={s.projectIcon} color="#013220" />
                <h3 className="h2">Project 1</h3>
              </div>
              <p className="paragraph">blbablabalba</p>
            </div>

            <div className={s.card}>
              <div className={s.cardHeader}>
                <LeafIcon className={s.projectIcon} color="#013220" />
                <h3 className="h2">Project 1</h3>
              </div>
              <p className="paragraph">blbablabalba</p>
            </div>

            <div className={s.card}>
              <div className={s.cardHeader}>
                <LeafIcon className={s.projectIcon} color="#013220" />
                <h3 className="h2">Project 1</h3>
              </div>
              <p className="paragraph">blbablabalba</p>
            </div>

            <div className={s.card}>
              <div className={s.cardHeader}>
                <LeafIcon className={s.projectIcon} color="#013220" />
                <h3 className="h2">Project 1</h3>
              </div>
              <p className="paragraph">blbablabalba</p>
            </div>

            <div className={s.card}>
              <div className={s.cardHeader}>
                <LeafIcon className={s.projectIcon} color="#013220" />
                <h3 className="h2">Project 1</h3>
              </div>
              <p className="paragraph">blbablabalba</p>
            </div>

            <div className={s.card}>
              <div className={s.cardHeader}>
                <LeafIcon className={s.projectIcon} color="#013220" />
                <h3 className="h2">Project 1</h3>
              </div>
              <p className="paragraph">blbablabalba</p>
            </div>

            <div className={s.card}>
              <div className={s.cardHeader}>
                <LeafIcon className={s.projectIcon} color="#013220" />
                <h3 className="h2">Project 1</h3>
              </div>
              <p className="paragraph">blbablabalba</p>
            </div>

            <div className={s.card}>
              <div className={s.cardHeader}>
                <LeafIcon className={s.projectIcon} color="#013220" />
                <h3 className="h2">Project 1</h3>
              </div>
              <p className="paragraph">blbablabalba</p>
            </div>

            <div className={s.card}>
              <div className={s.cardHeader}>
                <LeafIcon className={s.projectIcon} color="#013220" />
                <h3 className="h2">Project 1</h3>
              </div>
              <p className="paragraph">blbablabalba</p>
            </div>

            <div className={s.card}>
              <div className={s.cardHeader}>
                <LeafIcon className={s.projectIcon} color="#013220" />
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
