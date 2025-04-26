import { getArticles } from "./blog/utils";

export const baseUrl = "https://nadia-guarracino.vercel.app/";

export default async function sitemap() {
  const blogs = getArticles().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const routes = ["", "/blog"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
