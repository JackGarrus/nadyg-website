import { Jost } from "next/font/google";
import "@/app/style/globals.css";
import "@/app/style/reset.css";

const jost = Jost({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.className} antialiased`}>{children}</body>
    </html>
  );
}
