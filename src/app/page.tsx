import "@/app/style/globals.css";
import s from "@/app/page.module.css";
import AboutSection from "@/app/components/AboutSection";
import ContactsSection from "@/app/components/ContactsSection";
// import ProjectsSection from "@/app/components/ProjectsSection";
import Section from "@/app/components/Section";
import { BlogPosts } from "./components/posts";
import Link from "next/link";
import ArrowUpSquare from "./icons/arrowUpSquare";
import t from "@/app/style/typography.module.css";
import clsx from "clsx";

export default function Home() {
  return (
    <>
      <Section>
        <section className={s.yapSection}>
          <AboutSection />
        </section>

        <section className={s.projectsSection}>
          <Link
            key="/blog"
            href="/blog"
            target="blank"
            className={clsx(s.link, "flex ")}
          >
            <h1 className={t.h1}>My Blog</h1>
            <ArrowUpSquare className="icon" color="#f1b900" />
          </Link>
          <BlogPosts />
        </section>
      </Section>

      <Section>
        <section className={s.contactsSection}>
          <ContactsSection />
        </section>
      </Section>
    </>
  );
}
