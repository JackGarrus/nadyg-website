"use client";

import { ReactNode } from "react";
import s from "@/app/components/Callout.module.css";

const Callout = ({ children }: { children: ReactNode }) => (
  <div className={s.callout}>{children}</div>
);

export default Callout;
