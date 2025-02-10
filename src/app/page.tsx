"use client";

import "./globals.css";
import s from "./page.module.css";
import AboutSection from "./components/AboutSection";
import ContactsSection from "./components/ContactsSection";
import ProjectsSection from "./components/ProjectsSection";
import Section from "./components/Section";

export default function Home() {
  return (
    <>
      <Section>
        <section className={s.yapSection}>
          <AboutSection />
        </section>

        <section className={s.projectsSection}>
          <ProjectsSection />
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
