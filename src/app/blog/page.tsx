import { ArticleCards } from "@/app/components/ArticleCards";
import t from "@/app/style/typography.module.css";
import l from "@/app/style/layout.module.css";
import s from "./Page.module.css";
import "@/app/style/globals.css";
import Label from "../components/Label";
import { Topic } from "../types";
import Link from "next/link";
import Home from "@/app/icons/Home";
import LeftArrow from "@/app/icons/LeftArrow";
import clsx from "clsx";

export const metadata = {
  title: "Blog",
  // TODO: change description
  description: "Read my blog.",
};

export default function Page() {
  const topics = ["js", "cs", "db", "devops", "ts", "ruby", "ror", "react"];

  return (
    <div className={s.pageLayout}>
      <div className={clsx(l.flex, l.aic)}>
        <Link href="/" className={clsx(l.flex, l.aic)}>
          <LeftArrow className="icon" />
          <Home className="icon" />
        </Link>
        <h1 className={t.blogTitle}>Blog</h1>
      </div>
      {/* TODO: move lavelContainer to a separate component */}
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
