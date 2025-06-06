// @ts-nocheck
import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";

import { AllPosts } from "@/app/components/Posts";
import GetStartedCode from "@/app/components/GetStartedCode";
import { getPageQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import PortableText from "@/app/components/PortableText";

export default async function Page() {
  const { data } = await sanityFetch({ query: getPageQuery, params: { slug: "home" } });
  console.log(data);

  const designers = data?.pageBuilder?.find((item: any) => item._type === "designers")?.designers;
  const dupeDesigners = [...designers, ...designers, ...designers, ...designers];

  const introText = data?.pageBuilder?.find((item: any) => item._type === "infoSection");
  const callToAction = data?.pageBuilder?.find((item: any) => item._type === "callToAction");

  return (
    <>
      <div className="min-h-screen w-screen">
        <div className="h-[50dvh] w-full relative">
          <Image src="/sponsor-hero-1.jpg" alt="fig" className="h-full w-full object-cover absolute top-0 left-0" fill priority />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 container py-12">
          <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
            <p className="text-xs font-bold uppercase text-gray-400">{introText?.subheading}</p>
            <PortableText value={introText?.content} className="font-serif text-xl md:text-2xl text-balance" />
          </div>
          <div className="col-span-1 md:col-span-2 flex justify-center md:justify-end gap-2 md:gap-4">
            <a target={callToAction?.link?.openInNewTab ? "_blank" : "_self"} href={callToAction?.link?.href} className="btn btn-primary">{callToAction?.buttonText}</a>
            <a href="#" className="btn btn-primary disabled">Purchase tickets</a>
          </div>
        </div>
        <div className="container py-12 flex flex-col gap-4">
          <p className="text-xs font-bold uppercase text-gray-400">fig 2025 designer lineup</p>
          <div className="relative overflow-x-hidden w-full flex items-center">
            <div className="inline-flex whitespace-nowrap">
              <div className="animate-marquee inline-flex">
                {dupeDesigners?.map((designer: any, index: number) => (
                  <div key={index} className="text-xs font-bold uppercase text-black inline-block mx-4">
                    {designer.firstName} {designer.lastName}
                  </div>
                ))}
              </div>
              <div className="animate-marquee inline-flex">
                {dupeDesigners?.map((designer: any, index: number) => (
                  <div key={index} className="text-xs font-bold uppercase text-black inline-block mx-4">
                    {designer.firstName} {designer.lastName}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* <a href="#" className="text-xs font-bold uppercase text-gray-300">see all designers →</a> */}
        </div>
      </div>
      {/* <div className="bg-gradient-to-r from-red-200 from-0% via-white via-40%  relative">
        <div className="bg-gradient-to-b from-white w-full h-40 absolute top-0"></div>
        <div className="bg-gradient-to-t from-white w-full h-40 absolute bottom-0"></div>
        <div className="container relative">
          <div className="mx-auto max-w-2xl py-20 lg:max-w-4xl lg:px-12 text-center">
            <div className="flex flex-col gap-4 items-center">
              <div className=" text-md leading-6 prose uppercase">
                A starter template for
              </div>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-black">
                <Link className="text-red-500 " href="https://sanity.io/">
                  Sanity
                </Link>{" "}
                +{" "}
                <Link className="text-[#000] " href="https://nextjs.org/">
                  Next.js
                </Link>
              </h1>
            </div>
            <div className="mt-6 space-y-6 prose sm:prose-lg md:prose-xl lg:prose-2xl text-gray-700">
              <p>
                This starter is a statically generated site that uses Next.js
                for the frontend and Sanity to handle its content. It comes with
                a standalone Sanity Studio that offers features like real-time
                collaboration, instant side-by-side content previews, and
                intuitive editing.
              </p>
            </div>
            <div className="flex items-center flex-col gap-4">
              <GetStartedCode />
              <Link
                href="https://www.sanity.io/docs"
                className="inline-flex text-red-500 text-xs md:text-sm underline hover:text-gray-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sanity Documentation
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 ml-1 inline"
                  fill="currentColor"
                >
                  <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V12L17.206 8.207L11.2071 14.2071L9.79289 12.7929L15.792 6.793L12 3H21Z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-10">
        <div className="container">
          <aside className="py-12 sm:py-20">
            <Suspense>{await AllPosts()}</Suspense>
          </aside>
        </div>
      </div> */}
    </>
  );
}
