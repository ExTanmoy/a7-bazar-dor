import type { Metadata } from "next";
import { Hind_Siliguri} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});


export const metadata: Metadata = {
  title: "বাজার দর",
  description: "প্রয়োজনীয় পণ্যের দাম এক নজরে।",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${hindSiliguri} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
