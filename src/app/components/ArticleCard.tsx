import Link from "next/link";
import { formatDate } from "../blog/utils";
import t from "@/app/style/typography.module.css";
import s from "@/app/components/ArticleCards.module.css";
import clsx from "clsx";
import { Post, Topic } from "../types";
import Label from "./Label";

interface Props {
  post: Post;
  label: string[];
}

export function ArticleCard({ post, label }: Props) {
  return (
    <Link key={post.slug} href={`/blog/${post.slug}`} className={s.card}>
      <div className={s.card_inner}>
        <p className={clsx(s.title, t.p)}>{post.metadata.title}</p>
        <p className={t.summary}>{post.metadata.summary}</p>
        <br />
        <p className={s.date}>{formatDate(post.metadata.publishedAt, false)}</p>
        <Label topic={label[0] as Topic} />
      </div>
    </Link>
  );
}
