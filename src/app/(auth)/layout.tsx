import { Inter } from "next/font/google";
import React from "react";
export const metadata = {
  title: "Login Page",
  description: "You can login here.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
