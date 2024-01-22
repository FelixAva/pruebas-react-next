import type { Metadata } from "next";
import { inter } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: "Rifate",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>
        </div>
        <div className={`${inter.className} antialiased`} >
          {children}
        </div>
      </body>
    </html>
  );
}
