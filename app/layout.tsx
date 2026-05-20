import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lyceum — Escola de Filosofia Clássica pelo Método Socrático | Brasil",
  description:
    "Formação filosófica séria, enraizada nos grandes clássicos e na tradição católica. Método socrático, currículo estruturado de 4 anos, comunidade intelectual real. Vagas limitadas.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
      <Script id="microsoft-clarity" strategy="afterInteractive">{`
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "wtwkmgo7ft");
      `}</Script>
    </html>
  );
}
