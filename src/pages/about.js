import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Fragment } from "react";
import Head from "next/head";

export default function About() {
  return (
    <Fragment>
      <Head>
        <title>About | Zoya</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className="xs:mt-8 md:mt-0 md:h-full lg:h-full grid sm:grid-cols-1 lg:grid-cols-5 pb-20">
        <div className="lg:p-12 mr-auto ml-auto xs:pt-20 lg:pt-28 lg:col-span-2">
          <Image
            alt="Zoya Tommy"
            width="500"
            height="100"
            src="/zoya-tommy.webp"
          />
        </div>
        <div className="flex-1 xs:pt-10 xs:pl-12 xs:pr-12 xs:pb-32 md:pr-32 md:pl-32 lg:pl-0 lg:col-span-3 lg:pt-32 lg:pb-0 lg:pr-72">
          {/* <div className="flex-1 sm:pl-12 sm:pr-12 lg:pl-0 pt-28 pr-32 pb-52 min-w-600 max-w-500 md:ml-auto md:mr-auto md:w-300 md:pl-32 "> */}
          <h1 className="xs:pb-10 md:pb-2 typeface-seasons xs:text-5xl md:text-6xl lg:text-7xl">
            Zoya Tommy is a RISD-trained painter & gallerist.
          </h1>
          <p className="prose-stone text-lg lg:mt-10 md:mt-5">
            For the past decade, Zoya Tommy Kemp has been dedicated to
            representing contemporary artists from diverse cultural traditions.
            Originally from Trinidad, she completed her BA at the Rhode Island
            School of Design and then moved to Houston, Texas to pursue an MFA
            at the University of Houston. Zoya first opened her gallery in 2009
            at a location on Milam Street in Midtown and eventually moved to a
            space at 4411 Montrose. In 2013, she and her husband designed a
            beautiful new gallery space on Fannin Street. They did business
            there for 3 years, until Zoya’s life took an unexpected turn. In
            2017, she had two twin girls and she became a private art dealer
            based out of her art studio on the 4th floor of her home. In
            addition to honing her own artistic practice, she also sells works
            by artists from all over the US and manages her late husband’s
            estate. Today, Zoya continues to enjoy working with clients and
            collectors to help them find pieces that suit their needs for art in
            their lives.
          </p>
        </div>
      </section>
      {/* <div className="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto pb-14">
        <div className="snap-center shrink-0">
          <Image
            width="320"
            height="160"
            alt=""
            src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
          />
        </div>
        <div className="snap-center shrink-0">
          <img src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
        </div>
        <div className="snap-center shrink-0">
          <img src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
        </div>
        <div className="snap-center shrink-0">
          <img src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
        </div>
        <div className="snap-center shrink-0">
          <img src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
        </div>
        <div className="snap-center shrink-0">
          <img src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
        </div>
      </div> */}
    </Fragment>
  );
}
