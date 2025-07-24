import Image from "next/image";
import { urlForImage } from "@/sanity/lib/utils";

type Designer = {
  _id: string;
  firstName: string;
  lastName: string;
  picture: {
    asset?: any;
    alt?: string;
  };
};

type DesignersBlockProps = {
  block: {
    _type: "designersBlock";
    _key: string;
    heading?: string;
    designers?: Designer[];
  };
  index: number;
  isInContainer?: boolean;
};

export default function DesignersBlock({
  block,
  isInContainer = false,
}: DesignersBlockProps) {
  return (
    <section className={isInContainer ? "py-8 px-6 md:px-8 lg:px-12" : "container py-16 lg:py-20"}>
      <div className="max-w-7xl mx-auto">
        {block?.heading && (
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl">{block.heading}</h2>
          </div>
        )}

        {block?.designers && block.designers.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-10">
            {block.designers.map((designer, index) => {
              const imageUrl = designer.picture?.asset?._ref
                ? urlForImage(designer.picture)?.url()
                : null;

              return (
                <div
                  key={designer._id || index}
                  className="group cursor-pointer transition-all duration-300 hover:scale-105"
                >
                  <div className="aspect-square relative overflow-hidden rounded-2xl bg-gray-100 shadow-sm group-hover:shadow-lg transition-shadow duration-300">
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        alt={
                          designer.picture.alt ||
                          `${designer.firstName} ${designer.lastName}` ||
                          "Designer"
                        }
                        fill
                        className="object-cover transition-all duration-300 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-200">
                        <span className="text-gray-400 text-sm">No Image</span>
                      </div>
                    )}
                  </div>

                  <div className="mt-4 text-center">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-200">
                      {designer.firstName} {designer.lastName}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {(!block?.designers || block.designers.length === 0) && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No designers to display</p>
          </div>
        )}
      </div>
    </section>
  );
}
