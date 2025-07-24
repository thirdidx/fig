import { type PortableTextBlock } from "next-sanity";

import PortableText from "@/app/components/PortableText";
import { InfoSection } from "@/sanity.types";

type InfoProps = {
  block: InfoSection;
  index: number;
  isInContainer?: boolean;
};

export default function CTA({ block, isInContainer = false }: InfoProps) {
  return (
    <div className={isInContainer ? "" : "my-12 px-6 md:px-8 lg:px-12"}>
      <div className="max-w-3xl">
        {block?.heading && <h2 className="text-2xl">{block.heading}</h2>}
        {block?.subheading && (
          <span className="block mt-4 mb-8 text-lg uppercase font-light text-gray-900/70">
            {block.subheading}
          </span>
        )}
        <div className="mt-4">
          {block?.content?.length && (
            <PortableText
              className=""
              value={block.content as PortableTextBlock[]}
            />
          )}
        </div>
      </div>
    </div>
  );
}
