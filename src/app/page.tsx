import "@/app/style/globals.css";
import s from "@/app/page.module.css";
import AboutSection from "@/app/components/AboutSection";
import { ArticleCards } from "./components/ArticleCards";
import t from "@/app/style/typography.module.css";
import l from "@/app/style/layout.module.css";
import ThemeToggle from "./theme/ThemeToggle";
import clsx from "clsx";
import Link from "next/link";
import RightArrow from "./icons/RightArrow";

export default function Home() {
  return (
    <div className={s.page}>
      <div className={s.contentContainer}>
        <div className={s.themeContainer}>
          <ThemeToggle />
        </div>
        <section className={s.yapSection}>
          <AboutSection />
        </section>
        <section className={s.blogSection}>
          <p className={clsx(t.blogTitle, l.tar)}>Blog</p>

          <p className={t.subtitle}>Latest posts</p>
          <ArticleCards />
          <br />
          <br />
          <div className={clsx(l.flex, l.aic, l.jce)}>
            <Link href="/blog" className={clsx(l.flex, l.aic)}>
              <p className="info">More on the blog page</p>
              <RightArrow className="icon" />
            </Link>
          </div>
          <br />
          <br />
          <br />
        </section>
      </div>
    </div>
  );
}
