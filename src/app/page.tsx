"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  function logit() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }

    console.log(scrollY);
    watchScroll();
    // Remove listener (like componentWillUnmount)
    return () => {
      window.removeEventListener("scroll", logit);
    };
  }, []);

  console.log(window);
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
