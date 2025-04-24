import { notFound } from "next/navigation";
import { CustomMDX } from "@/app/components/mdx";
import { formatDate, getBlogPosts } from "@/app/blog/utils";
import { baseUrl } from "@/app/sitemap";
import Link from "next/link";
import t from "@/app/style/typography.module.css";
import s from "./Page.module.css";
import l from "@/app/style/layout.module.css";
import clsx from "clsx";
import ShareButtons from "@/app/components/ShareButtons";
import ThemeToggle from "@/app/theme/ThemeToggle";
import Home from "@/app/icons/Home";
import LeftArrow from "@/app/icons/LeftArrow";
import Label from "@/app/components/Label";
import { Topic } from "@/app/types";

export async function generateStaticParams() {
  const posts = getBlogPosts();

  return posts.map((post) => {
    return {
      slug: post.slug,
    };
  });
}

export function generateMetadata({ params }) {
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
    author,
  } = post.metadata;

  const ogImage = image?.startsWith("http") ? image : `${baseUrl}${image}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      authors: [author],
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    other: {
      author,
    },
  };
}

export default function Blog({ params }) {
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className={s.pageLayout}>
      <div className={s.header}>
        <Link href="/" className={clsx(l.flex, l.aic)}>
          <LeftArrow className="icon" />
          <Home className="icon" />
        </Link>
        <ThemeToggle />
      </div>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Nadia Guarracino",
              url: "https://nadia-guarracino.vercel.app/",
            },
          }),
        }}
      />
      <div className={s.labelContainter}>
        {post.metadata.topics?.map((topic) => (
          <Label key={topic} topic={topic as Topic} />
        ))}
      </div>
      <br />
      <h1
        className={clsx(t.blogPostTitle, t.highlight)}
        style={{ textAlign: "right" }}
      >
        {post.metadata.title}
      </h1>
      <br />
      <div className={clsx(l.flex, l.jcsb, l.aic)}>
        <p className={clsx(t.p, t.blogPostDate)}>
          {formatDate(post.metadata.publishedAt)}
        </p>

        <ShareButtons />
      </div>
      <br />
      <br />
      <article>
        <CustomMDX source={post.content} />
        <ShareButtons hasMessage />
      </article>
      <br />
      <br />
      <Link href="/" className={clsx(l.flex, l.aic)}>
        <LeftArrow className="icon" />
        <Home className="icon" />
      </Link>
    </div>
  );
}
