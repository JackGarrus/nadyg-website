import "@/app/style/globals.css";
import s from "@/app/page.module.css";
import AboutSection from "@/app/components/AboutSection";
import ContactsSection from "@/app/components/ContactsSection";
// import ProjectsSection from "@/app/components/ProjectsSection";
import Section from "@/app/components/Section";
import { BlogPosts } from "./components/posts";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Section>
        <section className={s.yapSection}>
          <AboutSection />
        </section>

        <section className={s.projectsSection}>
          <Link key="/blog" href="/blog" target="blank" className={s.link}>
            <h1>My Blog</h1>
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
