import Link from "next/link";
import { formatDate, getBlogPosts } from "../blog/utils";
import t from "@/app/style/typography.module.css";
import s from "@/app/components/Posts.module.css";
import clsx from "clsx";

export function BlogPosts() {
  const allBlogs = getBlogPosts();

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className={s.container}>
              <p className={clsx(s.title, t.p)}>{post.metadata.title}</p>
              <p className={t.summary}>{post.metadata.summary}</p>
              <br />
              <p className={s.date}>
                {formatDate(post.metadata.publishedAt, false)}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}
