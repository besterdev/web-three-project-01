import { useEffect, useState } from "react";
import Image from "next/image";
import { useMoralis } from "react-moralis";
import NextImage from "./NextImage";

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
        <div className="w-40 h-40 overflow-hidden rounded-full">
          <NextImage
            src="https://i.pinimg.com/564x/21/01/b4/2101b483d2299babdf9c901636df67ba.jpg"
            height={200}
            width={200}
            className="w-full h-full"
            objectFit="cover"
          />
        </div>

        <button
          className="p-4 mt-6 font-semibold bg-blue-500 rounded-lg animate-pulse"
          onClick={() => authenticate()}
        >
          Login to the METAVERSE
        </button>
      </div>
      <div className="w-full h-screen">
        <NextImage
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};
