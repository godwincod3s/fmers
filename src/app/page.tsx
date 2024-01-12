"use client";

import Typewriter from 'typewriter-effect';
import Lottie, { LottieProps } from "react-lottie-player"

import animationData from "@/lottie/errorComplait.json"

export default function Home() {
  const defaultOptions: LottieProps = {
    loop: true,
    play: true,
    animationData: animationData,
    rendererSettings: {
       preserveAspectRatio: "xMidYMid slice"
    }
  };


  return (
    <main className="py-8 sm:py-4 relative h-screen min-w-screen overflow-hidden flex flex-col lg:flex-row">
      <div className='text-center lg:my-[8%] lg:w-[40%]'>
        <h1 className="inline-block font-bold text-lg lg:text-xl xl:text-2xl">Flour Mill Errror Reporting Application</h1>
        <div className='lg:block xl:block hidden mt-8'>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('Hello, and Welcome!')
                .callFunction(() => {
                  console.log('String typed out!');
                })
                .pauseFor(2500)
                .deleteAll()
                .typeString('Sign in or Sign up to start logging errors.')
                .pauseFor(2500)
                .callFunction(() => {
                  console.log('All strings were deleted');
                })
                .start();
            }}
            />
        </div>
      </div>
      <div className='text-center xl:w-[40%] mt-4 sm:mt-2 lg:hidden'>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('Hello, and Welcome!')
              .callFunction(() => {
                console.log('String typed out!');
              })
              .pauseFor(2500)
              .deleteAll()
              .typeString('Sign in or Sign up to start logging errors.')
              .pauseFor(2500)
              .callFunction(() => {
                console.log('All strings were deleted');
              })
              .start();
          }}
        />
      </div>
      <Lottie { ...defaultOptions } className="absolute top-1/2 transform -translate-y-1/2 lg:translate-x-[20%]" /> 
      <div className='absolute w-[100%] lg:w-[40%] text-center top-[85%] transform -translate-y-[85%] sm:top-[90%] lg:top-[60%]'>
          <button className='mx-4 font-bold bg-green-300 hover:bg-white px-10 py-2 lg:py-4 border shadow-xl rounded-full'>Get Started!</button>
          {/* <button className='mx-4 bg-green-500 hover:bg-white px-4 py-2 border shadow-xl rounded-full'>Sign Up</button> */}
      </div>
    </main> 
  )
}