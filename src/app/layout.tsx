import { Jost } from "next/font/google";
import "@/app/style/globals.css";
import "@/app/style/reset.css";
import "@/app/style/themes.css";

import { ThemeProvider } from "./theme/ThemeProvider";

const jost = Jost({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={`${jost.className} antialiased`}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
