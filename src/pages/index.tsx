import Cards from "@/components/Cards";
import Header from "@/components/Header";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main className={`flex min-h-screen flex-col bg-gray-100`}>
        <Header />
        <Cards />
      </main>
    </>
  );
}
