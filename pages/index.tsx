import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Nav from "../components/layout/Nav";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>DY Studio</title>
      </Head>
      <>
        <Nav />
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          className="video"
          autoPlay
          muted
          loop
          style={{ objectFit: "cover", objectPosition: "center" }}
        >
          <source src="/showreel.mp4" />
        </video>

        <main className="container" style={{ textAlign: "justify" }}></main>
      </>
    </>
  );
};

export default Home;
