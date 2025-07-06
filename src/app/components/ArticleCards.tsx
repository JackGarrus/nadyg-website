import { getArticles } from "../blog/utils";
import s from "@/app/components/ArticleCards.module.css";
import { ArticleCard } from "./ArticleCard";
import { getTopicLabel } from "../blog/utils/getTopicLabel";

interface Props {
  filter?: string;
}

export function ArticleCards({ filter }: Props) {
  const articles = getArticles();

  const filtered = filter
    ? articles.filter((article) => {
        const labels = article.metadata.topics.map(getTopicLabel);
        return labels.includes(filter);
      })
    : articles;

  return (
    <div className={s.page}>
      {filtered
        .sort(
          (a, b) =>
            new Date(b.metadata.publishedAt).getTime() -
            new Date(a.metadata.publishedAt).getTime()
        )
        .map((post, i) => (
          <div key={i}>
            <ArticleCard post={post} label={post.metadata.topics} />
          </div>
        ))}
    </div>
  );
}
