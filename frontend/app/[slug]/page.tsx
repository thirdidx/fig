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
    // Use the published perspective in generateStaticParams
    perspective: "published",
    stega: false,
    tags: ["pages"],
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
    tags: ["pages", `page:${params.slug}`],
  });

  return {
    title: page?.name,
    description: page?.heading,
  } satisfies Metadata;
}

export default async function Page(props: Props) {
  const params = await props.params;
  const [{ data: page }] = await Promise.all([
    sanityFetch({
      query: getPageQuery,
      params,
      tags: ["pages", `page:${params.slug}`],
    }),
  ]);

  if (!page?._id) {
    return (
      <div className="py-40">
        <PageOnboarding />
      </div>
    );
  }

  return (
    <div className="bg-light px-4 pt-32">
      <Head>
        <title>{page.heading}</title>
      </Head>
      <div className="mb-8 pt-8">
        <div className="grid grid-cols-12">
          <div className="md:col-span-10 md:col-start-2 col-span-12">
            <div className="flex flex-col gap-4">
              <div>
                <h1 className="text-2xl">{page.heading}</h1>
                {page.subheading && (
                  <p className="font-accent uppercase">{page.subheading}</p>
                )}
              </div>
              <PageBuilderPage page={page as GetPageQueryResult} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
