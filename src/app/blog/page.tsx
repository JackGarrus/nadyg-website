import { ArticleCards } from "@/app/components/ArticleCards";
import "@/app/style/globals.css";
import BlogHeader from "./BlogHeader";
import BlogArticleFilters from "./BlogArticleFilters";
import s from "./Page.module.css";

interface PageProps {
  searchParams: { filter?: string };
}

export default function Page({ searchParams }: PageProps) {
  const selectedFilter = searchParams.filter;

  return (
    <div className={s.pageLayout}>
      <BlogHeader />
      <BlogArticleFilters />
      <br />
      <ArticleCards filter={selectedFilter} />
    </div>
  );
}
