import Head from "next/head";
import "@/components/global.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="min-h-screen bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg.jpg')",
          backgroundColor: "rgba(255, 255, 255, 0.9)", // Adds transparency
          backgroundBlendMode: "lighten",
        }}
      >
        <Head>
          <title>ENGL 1170: Short Stories</title>
          <meta
            name="description"
            content="Final project for the course ENGL 1170 (2024SP)"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav />
        <main className="flex-grow px-10 py-6 bg-transparent">
          <div className="flex flex-col gap-y-2.5">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
