import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "文化影響力平台",
  description: "因為我們擁有共同的文化記憶，所以我們成為一家人。",
  icons: {
    icon: "/icons/logo_tab.png",
    shortcut: "/icons/logo_tab.png",
    apple: "/icons/logo_tab.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <body>
        {children}
      </body>
    </html>
  );
}