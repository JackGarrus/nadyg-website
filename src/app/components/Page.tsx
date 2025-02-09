import s from "./styles/page.module.css";

export default function Page({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={s.pageOuterContainer}>
      <div className={s.pageInnerContainer}>{children}</div>
    </div>
  );
}
