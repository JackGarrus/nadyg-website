"use client";

import { ReactNode } from "react";
import s from "@/app/components/Highlight.module.css";

const Highlight = ({ children }: { children: ReactNode }) => (
  <span className={s.highlighted}>{children}</span>
);

export default Highlight;
