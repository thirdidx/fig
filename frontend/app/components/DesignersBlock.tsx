import Image from "next/image";

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

export default function DesignersBlock({ block, isInContainer = false }: DesignersBlockProps) {
  return (
    <div className={isInContainer ? "" : "container my-12"}>
      <div className="max-w-6xl mx-auto">
        {block?.heading && (
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-center">
            {block.heading}
          </h2>
        )}
        
        {block?.designers && block.designers.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {block.designers.map((designer, index) => (
              <div 
                key={designer._id || index} 
                className="group cursor-pointer transition-transform duration-200 hover:scale-105"
              >
                <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-100">
                  {designer.picture ? (
                    <Image
                      src={designer.picture.asset?.url || ""}
                      alt={designer.picture.alt || `${designer.firstName} ${designer.lastName}` || "Designer"}
                      fill
                      className="object-cover transition-opacity duration-200 group-hover:opacity-90"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200">
                      <span className="text-gray-400 text-sm">No Image</span>
                    </div>
                  )}
                </div>
                
                <h3 className="mt-3 text-lg font-medium text-gray-900 group-hover:text-gray-700 transition-colors duration-200">
                  {designer.firstName} {designer.lastName}
                </h3>
              </div>
            ))}
          </div>
        )}
        
        {(!block?.designers || block.designers.length === 0) && (
          <div className="text-center py-12">
            <p className="text-gray-500">No designers to display</p>
          </div>
        )}
      </div>
    </div>
  );
}