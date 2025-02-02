"use client";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <section>
        <h1>NadyG Forge</h1>
        <p>
          Hi, I’m Nadia G, an indie app developer from Berlin. Check out my
          productivity and creative apps.
        </p>
        <a>Blog</a>
        <p>
          I also have fun on <a>Unsplash</a> and <a>Soundcloud</a>.
        </p>
      </section>

      <div>Projects</div>
    </div>
  );
}
