import s from "@/app/components/styles/section.module.css";

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
