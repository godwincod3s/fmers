"use client";

import Image from 'next/image'
import Lottie from 'lottie-react'
import animationData from "@/lottie/errorComplait.json"

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
       preserveAspectRatio: "xMidYMid slice"
    }
  };
  // @ts-ignore
  const LottieAnimation = <Lottie height={400} width={400} className='img-fluid' />;


  return (
    // flex min-h-screen flex-col items-center justify-between p-24
    <main className="">
      {LottieAnimation}      
    </main>
  )
}
