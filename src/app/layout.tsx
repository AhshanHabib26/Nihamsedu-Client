import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import CustomProvider from "@/provider/Provider";

const hindSiliguri = Hind_Siliguri({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nihams Education Website | Ahshan Habib",
  description: "Nihamsedu provides best education services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={hindSiliguri.className}>
        <div>
          <CustomProvider>{children}</CustomProvider>
        </div>
      </body>
    </html>
  );
}
