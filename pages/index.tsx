import type { NextPage } from "next";
import Head from "next/head";
import { useMoralis } from "react-moralis";

import { LogIn } from "../components/Login";

const Home: NextPage = () => {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <LogIn />;

  return (
    <div className="h-screen">
      <Head>
        <title>Metaverse 01 App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome ti the app</h1>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
};

export default Home;
