import s from "@/app/components/Section.module.css";

export default function Section({
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
