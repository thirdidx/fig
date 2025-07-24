import ResolvedLink from "@/app/components/ResolvedLink";
import { CallToAction } from "@/sanity.types";

type CtaProps = {
  block: CallToAction;
  index: number;
  isInContainer?: boolean;
};

export default function CTA({ block, isInContainer = false }: CtaProps) {
  return (
    <div className={isInContainer ? "w-full h-full flex items-center justify-center" : "container my-12"}>
      <div className={`bg-light ${isInContainer ? 'w-full h-full flex items-center justify-center' : 'rounded-lg max-w-3xl'}`}>
        <div className="flex flex-col gap-6 max-w-lg p-8 md:p-12">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold tracking-tight text-dark sm:text-3xl lg:text-4xl">
              {block.heading}
            </h2>
            <p className="text-dark leading-relaxed text-lg">{block.text}</p>
          </div>

          <div className="flex items-center gap-x-6">
            <ResolvedLink
              link={block.link}
              className="rounded-full flex gap-2 items-center bg-maroon hover:bg-dark text-light py-3 px-6 transition-colors duration-200 font-medium"
            >
              {block.buttonText}
            </ResolvedLink>
          </div>
        </div>
      </div>
    </div>
  );
}
