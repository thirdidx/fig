import ResolvedLink from "@/app/components/ResolvedLink";
import { CallToAction } from "@/sanity.types";

type CtaProps = {
  block: CallToAction;
  index: number;
  isInContainer?: boolean;
};

export default function CTA({ block, isInContainer = false }: CtaProps) {
  return (
    <div
      className={
        isInContainer
          ? "w-full h-full flex items-center justify-center"
          : "container my-12"
      }
    >
      <div
        className={`bg-maroon ${isInContainer ? "w-full h-full flex items-center justify-center" : "rounded-lg max-w-3xl"}`}
      >
        <div className="flex flex-col gap-6 p-8">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl text-light">{block.heading}</h2>
            <p className="text-light leading-relaxed text-lg">{block.text}</p>
          </div>

          <div className="flex items-center gap-x-6">
            <ResolvedLink
              link={block.link}
              className="rounded-full flex gap-2 items-center bg-light text-dark py-3 px-6 transition-colors duration-200 font-accent uppercase"
            >
              {block.buttonText}
            </ResolvedLink>
          </div>
        </div>
      </div>
    </div>
  );
}
