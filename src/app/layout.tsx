import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdulkareem Dandal - Full-Stack Developer",
  description: "Portfolio of Abdulkareem Dandal, a Full-Stack Developer with 5+ years of experience in designing, developing, and deploying scalable web and mobile applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
