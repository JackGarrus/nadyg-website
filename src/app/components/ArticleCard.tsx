import Link from "next/link";
import { formatDate } from "../blog/utils";
import t from "@/app/style/typography.module.css";
import s from "@/app/components/ArticleCards.module.css";
import clsx from "clsx";
import { Post } from "../types";

interface Props {
  post: Post;
}

export function ArticleCard({ post }: Props) {
  return (
    <Link key={post.slug} href={`/blog/${post.slug}`} className={s.card}>
      <div className={s.card_inner}>
        <p className={clsx(s.title, t.p)}>{post.metadata.title}</p>
        <p className={t.summary}>{post.metadata.summary}</p>
        <br />
        <p className={s.date}>{formatDate(post.metadata.publishedAt, false)}</p>
      </div>
    </Link>
  );
}
