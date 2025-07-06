import t from "@/app/style/typography.module.css";
import l from "@/app/style/layout.module.css";
import "@/app/style/globals.css";
import Link from "next/link";
import Home from "@/app/icons/Home";
import LeftArrow from "@/app/icons/LeftArrow";
import clsx from "clsx";

export const metadata = {
  title: "Blog",
  // TODO: change description
  description: "Read my blog.",
};

export default function BlogHeader() {
  return (
    <div className={clsx(l.flex, l.aic)}>
      <Link href="/" className={clsx(l.flex, l.aic)}>
        <LeftArrow className="icon" />
        <Home className="icon" />
      </Link>
      <h1 className={t.blogTitle}>Tech Blog</h1>
    </div>
  );
}
