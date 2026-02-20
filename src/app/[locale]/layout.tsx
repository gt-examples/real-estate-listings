import type { Metadata } from "next";
import { GTProvider } from "gt-next";
import { getGT, getLocale } from "gt-next/server";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getGT();
  const title = t("Real Estate Listings | General Translation");
  const description = t(
    "Browse property listings with internationalization powered by General Translation."
  );
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      locale,
      type: "website",
      siteName: "General Translation",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
    alternates: {
      canonical: "https://real-estate-listings.generaltranslation.dev",
      languages: {
        en: "/en",
        es: "/es",
        fr: "/fr",
        ja: "/ja",
        zh: "/zh",
      },
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  return (
    <html lang={locale}>
      <body
        className={`${inter.className} bg-zinc-950 text-zinc-100 antialiased`}
      >
        <GTProvider>{children}</GTProvider>
      </body>
    </html>
  );
}
