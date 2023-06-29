import BarChart from "@/components/BarChart";
import Cards from "@/components/Cards";
import Header from "@/components/Header";
import RecentOrders from "@/components/RecentOrders";
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
        <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
          <BarChart />
          <RecentOrders />
        </div>
      </main>
    </>
  );
}
