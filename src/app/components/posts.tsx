import Link from "next/link";
import { formatDate, getBlogPosts } from "../blog/utils";

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
            <div
              style={{
                padding: "1rem",
                background: "#133f31",
                marginBottom: "1rem",
              }}
            >
              <p
                style={{
                  fontWeight: "bold",
                  paddingBottom: "1rem",
                  lineHeight: "1.5",
                  fontSize: "22px",
                }}
              >
                {post.metadata.title}
              </p>
              <p
                style={{
                  paddingBottom: "1rem",
                  lineHeight: "1.5",
                }}
              >
                {post.metadata.summary}
              </p>
              <p style={{ textAlign: "right", fontStyle: "italic" }}>
                {formatDate(post.metadata.publishedAt, false)}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}
