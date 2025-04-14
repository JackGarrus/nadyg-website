import "@/app/style/globals.css";
import s from "@/app/page.module.css";
import AboutSection from "@/app/components/AboutSection";
import Section from "@/app/components/Section";
import { BlogPosts } from "./components/posts";
import Link from "next/link";
import ArrowUpSquare from "./icons/arrowUpSquare";
import t from "@/app/style/typography.module.css";
import l from "@/app/style/layout.module.css";
import clsx from "clsx";
import ThemeToggle from "./theme/ThemeToggle";

export default function Home() {
  return (
    <>
      <div className={clsx(l.w100, t.tar)}>
        <ThemeToggle />
      </div>
      <Section>
        <div className={s.page}>
          <section className={s.yapSection}>
            <AboutSection />
          </section>
          <section className={s.blogSection}>
            <Link
              key="/blog"
              href="/blog"
              target="blank"
              className={clsx(s.link, l.flex, l.aic, l.jce)}
            >
              <h1 className={clsx(t.blogTitle, l.flex, l.aic, l.pl16, l.tar)}>
                Blog
                <ArrowUpSquare className="icon" color="#dcb06d" />
              </h1>
            </Link>
            <BlogPosts />
          </section>
        </div>
      </Section>
    </>
  );
}
