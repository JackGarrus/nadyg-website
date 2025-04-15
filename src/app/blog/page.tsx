import { BlogPosts } from "@/app/components/posts";
import Section from "../components/Section";
import t from "@/app/style/typography.module.css";
import s from "./Page.module.css";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <Section>
      <div className={s.pageLayout}>
        <h1 className={t.blogTitle}>Blog</h1>
        <BlogPosts />
      </div>
    </Section>
  );
}
