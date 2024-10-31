import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Stack from "@/styles/components/ui/Stack";
import TopNav from "@/styles/components/ui/TopNav";
import SideNav from "@/styles/components/ui/SideNav";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <Stack direction="column" className="w-screen h-screen overflow-hidden">
          <Stack className="h-16 w-full border-b">
            <TopNav />
          </Stack>
          <Stack className="size-full">
            <Stack className="w-1/6 h-full border-r justify-center">
              <SideNav />
            </Stack>
            <Stack className="size-full p-xs overflow-auto">{children}</Stack>
          </Stack>
        </Stack>
      </body>
    </html>
  );
}
