export type Topic =
  | "js"
  | "ts"
  | "react"
  | "devops"
  | "ruby"
  | "ror"
  | "math"
  | "cs"
  | "db"
  | "physics";

export type Metadata = {
  title: string;
  author: string;
  publishedAt: string;
  summary: string;
  image?: string;
  topics: Topic[];
};

export interface Post {
  metadata: Metadata;
  slug: string;
  content: string;
}

export interface TableData {
  headers: string[];
  rows: (string | number)[][];
}

export interface TableHeaders {
  headers: string[];
}

export interface TableRows {
  rows: (string | number)[][];
}
