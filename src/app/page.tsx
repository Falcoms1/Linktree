import { Content } from "@/components/Content";
import { Header } from "@/components/Header";
import { Links } from "@/components/Links";
import { Main } from "@/components/Main";
import React, { createContext } from 'react';


export default function Home() {
  return (
    <>

      <div className="bg-[url('/espaco-sideral.jpg')] h-screen ">

        <main className="grid place-items-center h-screen w-screen">

          <div className="text-center bg-white/95 py-12 px-6 rounded-[80px]  ">


            <Content />
            <Header />
            <Main />
            <Links />


          </div>
        </main>
      </div>

    </>
  );
}

