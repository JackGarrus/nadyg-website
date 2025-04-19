import "@/app/style/globals.css";
import s from "@/app/page.module.css";
import AboutSection from "@/app/components/AboutSection";
import { BlogPosts } from "./components/posts";
import t from "@/app/style/typography.module.css";
import ThemeToggle from "./theme/ThemeToggle";

export default function Home() {
  return (
    <>
      <div className={s.themeContainer}>
        <ThemeToggle />
      </div>
      <div className={s.page}>
        <section className={s.yapSection}>
          <AboutSection />
        </section>
        <section className={s.blogSection}>
          {/*
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
            */}
          <p className={t.blogTitle}>Blog</p>
          <p className={t.subtitle}>Latest posts</p>
          <BlogPosts />
        </section>
      </div>
    </>
  );
}
