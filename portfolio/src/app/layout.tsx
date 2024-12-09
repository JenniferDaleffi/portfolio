import type { Metadata } from "next";
import "./globals.css";
import Nav from "../components/Nav/nav"


export const metadata: Metadata = {
  title: "Meu Portfólio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" type="image/png" href="/icone.png" />
      </head>
      <body>
        <Nav/>
        {children}
      </body>
    </html>
  );
}
