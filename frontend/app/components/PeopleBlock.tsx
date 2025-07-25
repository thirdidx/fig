import Image from "next/image";
import { urlForImage } from "@/sanity/lib/utils";

type Person = {
  _id: string;
  firstName: string;
  lastName: string;
  picture: {
    asset?: any;
    alt?: string;
  };
};

type PeopleBlockProps = {
  block: {
    _type: "people";
    _key: string;
    heading?: string;
    people?: Person[];
  };
  index: number;
  isInContainer?: boolean;
};

export default function PeopleBlock({ block, isInContainer = false }: PeopleBlockProps) {
  return (
    <section className={isInContainer ? "" : "container py-8 lg:py-16"}>
      <div className="max-w-7xl mx-auto">
        {block?.heading && (
          <div className="text-center md:text-left mb-12 lg:mb-16">
            <h2 className="text-2xl">
              {block.heading}
            </h2>
          </div>
        )}
        
        {block?.people && block.people.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-8">
            {block.people.map((person, index) => {
              const imageUrl = person.picture?.asset?._ref ? urlForImage(person.picture)?.url() : null;
              
              return (
                <div 
                  key={person._id || index} 
                  className="group cursor-pointer transition-all duration-300"
                >
                  <div className="aspect-[4/5] relative overflow-hidden bg-taupe/20">
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        alt={person.picture.alt || `${person.firstName} ${person.lastName}` || "Person"}
                        fill
                        className="object-cover transition-all duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-taupe/10">
                        <span className="text-taupe text-sm font-accent uppercase">No Image</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-3 text-center">
                    <h3 className="text-sm font-accent uppercase tracking-wider text-maroon/80 group-hover:text-maroon transition-colors duration-300">
                      {person.firstName} {person.lastName}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        
        {(!block?.people || block.people.length === 0) && (
          <div className="text-center py-16">
            <p className="text-taupe text-lg font-accent uppercase tracking-wide">No people to display</p>
          </div>
        )}
      </div>
    </section>
  );
}