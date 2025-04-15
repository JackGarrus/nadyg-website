import "@/app/style/reset.css";
import "@/app/style/globals.css";
import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";
import React from "react";
import t from "@/app/style/typography.module.css";
import s from "@/app/components/MDX.module.css";
import clsx from "clsx";
import { ReactNode } from "react";
import Callout from "./Callout";

function Table({ data }) {
  const headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ));
  const rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function CustomLink(props) {
  const href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function ResponsiveImage(props) {
  return <Image alt={props.alt} {...props} />;
}

function Code({ children, ...props }) {
  const codeHTML = highlight(children);
  return (
    <div className={s.code}>
      <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
    </div>
  );
}

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

function createHeading(level: number) {
  const Heading = ({ children }: { children: ReactNode }) => {
    const slug = slugify(children);

    return React.createElement(
      `h${level}`,
      {
        id: slug,
        className: clsx(t.highlight, {
          [t.blogPostH1]: level === 1,
          [t.blogPostH2]: level === 2,
          [t.blogPostH3]: level === 3,
        }),
      },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: clsx({
            [t.blogPostH1]: level === 1,
            [t.blogPostH2]: level === 2,
            [t.blogPostH3]: level === 3,
          }),
        }),
      ],
      children
    );
  };

  Heading.displayName = `Heading${level}`;
  return Heading;
}

function createParagraph({ children }: { children: ReactNode }) {
  return (
    <>
      <p className={clsx(t.p, t.blogPostParagraph)}>{children}</p>
    </>
  );
}

function Strong({ children }: { children: ReactNode }) {
  return <strong className={s.strong}>{children}</strong>;
}

function Blockquote({ children }: { children: ReactNode }) {
  return <blockquote className={s.blockquote}>{children}</blockquote>;
}

function UnorderedList({ children }: { children: ReactNode }) {
  return <ul className={s.ul}>{children}</ul>;
}

function ListItem({ children }: { children: ReactNode }) {
  return <li className={s.li}>{children}</li>;
}

function callout({ children }: { children: ReactNode }) {
  return <Callout>{children}</Callout>;
}

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  p: createParagraph,
  strong: Strong,
  blockquote: Blockquote,
  ul: UnorderedList,
  li: ListItem,
  Image: ResponsiveImage,
  a: CustomLink,
  code: Code,
  Callout: callout,
  Table,
};

export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
