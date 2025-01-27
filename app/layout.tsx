import type { Metadata } from "next";
import localFont from "next/font/local";
import NavBar from "./components/navigation-bar/NavBar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akko dot(on) Ninja",
  description: "My own humble website",
};

export default function RootLayout({ children }: any) {
  const themeScript = `
  (function() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
  })();
`;

  return (
    <html>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <NavBar />
        <div className="">{children}</div>
      </body>
    </html>
  );
}
