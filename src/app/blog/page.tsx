import { BlogPosts } from "@/app/components/posts";
import Section from "../components/Section";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <Section>
      <h1 className="h1">Blog</h1>
      <BlogPosts />
    </Section>
  );
}
