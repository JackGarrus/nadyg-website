import { getArticles } from "../blog/utils";
import s from "@/app/components/ArticleCards.module.css";
import { ArticleCard } from "./ArticleCard";

export function ArticleCards() {
  const articles = getArticles();

  return (
    <div className={s.page}>
      {articles
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post, i) => (
          <div key={i}>
            <ArticleCard post={post} label={post.metadata.topics} />
          </div>
        ))}
    </div>
  );
}
