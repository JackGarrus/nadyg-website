"use client";

import { useRouter, useSearchParams } from "next/navigation";
import s from "./Page.module.css";
import Label from "../components/Label";
import { Topic } from "../types";

export default function BlogArticleFilters() {
  const TOPICS: Topic[] = [
    "js",
    // "cs",
    //"db",
    "devops",
    // "ts",
    // "ruby",
    //  "ror",
    // "react",
    "systems",
  ];
  const router = useRouter();
  const searchParams = useSearchParams();

  /* TODO:
  - Reset filters
  - Show only labels that have at least 1 article
  */

  const handleClick = (label: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("filter", label);
    router.push(`?${params.toString()}`);
  };

  return (
    <div className={s.labelContainter}>
      {TOPICS.map((topic) => (
        <Label key={topic} topic={topic} isButton onClick={handleClick} />
      ))}
    </div>
  );
}
