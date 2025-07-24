import type { Metadata } from "next";
import Head from "next/head";

import PageBuilderPage from "@/app/components/PageBuilder";
import { sanityFetch } from "@/sanity/lib/live";
import { getPageQuery, pagesSlugs } from "@/sanity/lib/queries";
import { GetPageQueryResult } from "@/sanity.types";
import { PageOnboarding } from "@/app/components/Onboarding";

type Props = {
  params: Promise<{ slug: string }>;
};

/**
 * Generate the static params for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-static-params
 */
export async function generateStaticParams() {
  const { data } = await sanityFetch({
    query: pagesSlugs,
    // // Use the published perspective in generateStaticParams
    perspective: "published",
    stega: false,
  });
  return data;
}

/**
 * Generate metadata for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */
export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const { data: page } = await sanityFetch({
    query: getPageQuery,
    params,
    // Metadata should never contain stega
    stega: false,
  });

  return {
    title: page?.name,
    description: page?.heading,
  } satisfies Metadata;
}

export default async function Page(props: Props) {
  const params = await props.params;
  const [{ data: page }] = await Promise.all([
    sanityFetch({ query: getPageQuery, params }),
  ]);

  console.log("Page data:", page);

  if (!page?._id) {
    return (
      <div className="py-40">
        <PageOnboarding />
      </div>
    );
  }

  return (
    <div className="pt-24 bg-light">
      <Head>
        <title>{page.heading}</title>
      </Head>
      <div className="mb-8 lg:mb-12 pt-12 px-6 lg:px-8">
        <div className="container">
          <div className="py-12">
            <div className="max-w-3xl">
              <h1 className="text-2xl">{page.heading}</h1>
              {page.subheading && (
                <p className="mt-3 text-base lg:text-lg leading-relaxed text-gray-500 font-normal uppercase tracking-wide">
                  {page.subheading}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <PageBuilderPage page={page as GetPageQueryResult} />
    </div>
  );
}
