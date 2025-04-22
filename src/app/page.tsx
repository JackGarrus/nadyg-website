import "@/app/style/globals.css";
import s from "@/app/page.module.css";
import AboutSection from "@/app/components/AboutSection";
import { ArticleCards } from "./components/ArticleCards";
import t from "@/app/style/typography.module.css";
import l from "@/app/style/layout.module.css";
import ThemeToggle from "./theme/ThemeToggle";
import Link from "next/link";
import ArrowUpSquare from "./icons/arrowUpSquare";
import clsx from "clsx";

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
          <Link
            key="/blog"
            href="/blog"
            target="blank"
            className={clsx(s.link, l.flex, l.aic, l.jce, l.pb16)}
          >
            <p className={clsx(t.blogTitle, l.tar)}>Blog</p>
            <div className={l.pl8}>
              <ArrowUpSquare className="icon" />
            </div>
          </Link>
          <p className={t.subtitle}>Latest posts</p>
          <ArticleCards />
        </section>
      </div>
    </div>
  );
}
