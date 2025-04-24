import { getBlogPosts } from "../blog/utils";
import s from "@/app/components/ArticleCards.module.css";
import { ArticleCard } from "./ArticleCard";

export function ArticleCards() {
  const articles = getBlogPosts();

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
            <ArticleCard post={post} />
          </div>
        ))}

      <p className="info">
        Curious minds, stay close: fresh content is coming!
      </p>
    </div>
  );
}
