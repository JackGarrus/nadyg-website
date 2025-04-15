import { notFound } from "next/navigation";
import { CustomMDX } from "@/app/components/mdx";
import { formatDate, getBlogPosts } from "@/app/blog/utils";
import { baseUrl } from "@/app/sitemap";
import Section from "@/app/components/Section";
import t from "@/app/style/typography.module.css";
import s from "./Page.module.css";
import clsx from "clsx";
import ShareButtons from "@/app/components/ShareButtons";

export async function generateStaticParams() {
  const posts = getBlogPosts();

  return posts.map((post) => {
    console.log(post);
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
    <Section>
      <div className={s.pageLayout}>
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
        <h1
          className={clsx(t.blogPostTitle, t.highlight)}
          style={{ textAlign: "right" }}
        >
          {post.metadata.title}
        </h1>
        <br />
        <p className={clsx(t.p, t.blogPostDate)} style={{ textAlign: "right" }}>
          {formatDate(post.metadata.publishedAt)}
        </p>
        <br />
        <br />
        <article>
          <ShareButtons />
          <CustomMDX source={post.content} />
          <ShareButtons hasMessage />
        </article>
      </div>
    </Section>
  );
}
