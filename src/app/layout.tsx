import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import { UserProvider } from "@/ctx/userContext";


export const metadata: Metadata = {
  title: "Stemps Career",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <UserProvider>
        <Header/>
        {children}
        </UserProvider>
      </body>
    </html>
  );
}
