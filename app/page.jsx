'use client';

import Navbar from "./components/navbar/Navbar";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ProgressBar from "@ramonak/react-progress-bar";


const Page = () => {
  const [count, setCount] = useState(0);
  const router = useRouter();


  useEffect(() => {
    let intervalid = setInterval(() => {
        setCount((prev) => prev + 1);
    }, 20);
  
    return () => clearInterval(intervalid);
  }, []);

  useEffect(() => {
    if (count === 99) {
      router.replace("/auth");
    }
  }, [count]);

  return (
    <div className="flex flex-col h-dvh w-dvw justify-center items-center gap-1">
      <div className="flex flex-row gap-5 justify-between">
        <h1 className="text-xl lg:text-3xl font-black font-mono">Loading{`${count > 25 ? "." : ""}${count > 50 ? "." : ""}${count > 75 ? "." : ""}`}</h1>
        {/* <h1 className="text-xl lg:text-3xl font-black font-mono">{count}%</h1> */}
      </div>
    </div>
    
  )
};

export default Page;