import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
// import Navbar2 from "@/components/Navbar2";
// import About from "@/app/about";
import Footer from "@/components/Footer/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Navbar />
      {/* <Navbar2 /> */}
      <main className="pt-48 h-screen">
        {" "}
        {/* Adjust padding to avoid content being hidden behind fixed navbars */}
        <h1>Welcome to the Home Page</h1>
        <p>Landing page body section</p>
      </main>
      {/* <About /> */}
      <Footer />
    </>
  );
}
