import { BlogPosts } from "@/app/components/posts";
import Section from "../components/Section";
import t from "@/app/style/typography.module.css";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <Section>
      <h1 className={t.blogTitle}>Blog</h1>
      <BlogPosts />
    </Section>
  );
}
