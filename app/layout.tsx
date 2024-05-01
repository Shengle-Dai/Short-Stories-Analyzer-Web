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
      <body>
        <div>
          <Head>
            <title>ENGL 1170: Short Stories</title>
            <meta
              name="description"
              content="Final project for the course ENGL 1170 (2024SP)"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className="flex h-screen flex-col">
            <Nav />
            <main className="flex-grow px-10 py-6 bg-wight">
              <div className="flex flex-col gap-y-2.5">{children}</div>
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
