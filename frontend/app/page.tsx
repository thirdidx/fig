import { getPageQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";

import { GetPageQueryResult } from "@/sanity.types";
import PageBuilderPage from "@/app/components/PageBuilder";

export default async function Page() {
  const { data } = await sanityFetch({
    query: getPageQuery,
    params: { slug: "home" },
  });

  return (
    <>
      <div className="min-h-screen w-screen">
        <PageBuilderPage page={data as GetPageQueryResult} />
      </div>
    </>
  );
}
