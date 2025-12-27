import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://agentic-b0a8e7d1.vercel.app"),
  title: {
    default: "Flet Shqip - Një eksperiencë interaktive në gjuhën shqipe",
    template: "%s | Flet Shqip"
  },
  description:
    "Zbuloni një faqe të thjeshtë, moderne dhe krejtësisht në shqip. Praktikoni shprehjet kryesore, mësoni për kulturën dhe komunikoni në gjuhën tonë.",
  openGraph: {
    title: "Flet Shqip - Një eksperiencë interaktive në gjuhën shqipe",
    description:
      "Përjetoni një udhëtim në gjuhën shqipe me fraza, skena dialogu dhe mësime kulturore.",
    url: "https://agentic-b0a8e7d1.vercel.app",
    siteName: "Flet Shqip",
    locale: "sq_AL",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Flet Shqip - Një eksperiencë interaktive në gjuhën shqipe",
    description:
      "Një faqe moderne me përmbajtje tërësisht në shqip për të mësuar dhe praktikuar.",
    creator: "@fletshqip"
  },
  alternates: {
    canonical: "https://agentic-b0a8e7d1.vercel.app"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sq">
      <body>
        <div className="gradient" />
        {children}
      </body>
    </html>
  );
}
