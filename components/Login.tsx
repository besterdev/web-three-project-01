import { useEffect, useState } from "react";
import Image from "next/image";
import { useMoralis } from "react-moralis";

export const LogIn = () => {
  const { authenticate } = useMoralis();
  //---------------------
  // STATE
  //---------------------
  const [first, setfirst] = useState(null);

  //---------------------
  // EFFECT
  //---------------------
  useEffect(() => {}, []);

  //---------------------
  // HANDLER
  //---------------------

  //---------------------
  // RENDER
  //---------------------
  return (
    <div className="relative text-white bg-black">
      <h1>login</h1>
      <div className="absolute z-50 flex flex-col items-center justify-center w-full h-4/6">
        <Image src="https://links.papareact.com/3pi" height={200} width={200} />
        <button
          className="p-5 font-bold bg-yellow-500 rounded-lg animate-pulse"
          onClick={() => authenticate()}
        >
          Login to the METAVERSE
        </button>
      </div>
      <div className="w-full h-screen">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};
