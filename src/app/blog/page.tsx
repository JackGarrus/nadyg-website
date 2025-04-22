import { ArticleCards } from "@/app/components/ArticleCards";
import t from "@/app/style/typography.module.css";
import s from "./Page.module.css";
import Label from "../components/Label";
import { Topic } from "../types";

export const metadata = {
  title: "Blog",
  // TODO: change description
  description: "Read my blog.",
};

export default function Page() {
  const topics = ["js", "cs", "db", "docker", "ts", "ruby", "ror", "react"];

  return (
    <div className={s.pageLayout}>
      <h1 className={t.blogTitle}>Blog</h1>
      <div className={s.labelContainter}>
        {topics.map((topic) => (
          <Label key={topic} topic={topic as Topic} isButton />
        ))}
      </div>
      <br />
      <ArticleCards />
    </div>
  );
}
