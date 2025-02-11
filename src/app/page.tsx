import "@/app/style/globals.css";
import s from "@/app/page.module.css";
import AboutSection from "@/app/components/AboutSection";
import ContactsSection from "@/app/components/ContactsSection";
// import ProjectsSection from "@/app/components/ProjectsSection";
import Section from "@/app/components/Section";
import { BlogPosts } from "./components/posts";

export default function Home() {
  return (
    <>
      <Section>
        <section className={s.yapSection}>
          <AboutSection />
        </section>

        <section className={s.projectsSection}>
          <h1 className="h1">My Blog</h1>
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
