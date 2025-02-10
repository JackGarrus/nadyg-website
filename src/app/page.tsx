"use client";

import "@/app/style/globals.css";
import s from "@/app/page.module.css";
import AboutSection from "@/app/components/AboutSection";
import ContactsSection from "@/app/components/ContactsSection";
import ProjectsSection from "@/app/components/ProjectsSection";
import Section from "@/app/components/Section";

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
