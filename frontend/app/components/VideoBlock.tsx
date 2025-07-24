import { urlForImage } from "@/sanity/lib/utils";

type VideoBlockProps = {
  block: {
    _type: "video";
    _key?: string;
    heading?: string;
    description?: string;
    videoFile?: {
      asset?: {
        _ref: string;
        _type: "reference";
      };
    };
    orientation: "landscape" | "vertical" | "square" | "original";
    autoplay?: boolean;
    muted?: boolean;
    loop?: boolean;
    controls?: boolean;
    poster?: {
      asset?: any;
      alt?: string;
    };
  };
  index: number;
  isInContainer?: boolean;
};

const getAspectRatioClass = (orientation: string) => {
  switch (orientation) {
    case "landscape":
      return "aspect-video"; // 16:9
    case "vertical":
      return "aspect-[9/16]"; // 9:16
    case "square":
      return "aspect-square"; // 1:1
    case "original":
    default:
      return "aspect-video"; // fallback to 16:9
  }
};

const getVideoUrl = (videoFile: any) => {
  if (!videoFile?.asset?._ref) return null;
  
  // Convert Sanity file reference to URL
  const ref = videoFile.asset._ref;
  const [, id, extension] = ref.match(/^file-([a-f\d]+)-(\w+)$/) || [];
  
  if (!id || !extension) return null;
  
  return `https://cdn.sanity.io/files/4idrbn8o/production/${id}.${extension}`;
};

export default function VideoBlock({ block, isInContainer = false }: VideoBlockProps) {
  const videoUrl = getVideoUrl(block.videoFile);
  const posterUrl = block.poster ? urlForImage(block.poster)?.url() : null;
  
  if (!videoUrl) {
    return (
      <section className={isInContainer ? "py-8" : "container py-16 lg:py-20"}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-100 rounded-2xl p-8">
            <p className="text-gray-500">Video not available</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={isInContainer ? "py-8" : "container py-16 lg:py-20"}>
      <div className="max-w-6xl mx-auto">
        {(block?.heading || block?.description) && (
          <div className="text-center mb-8 lg:mb-12">
            {block.heading && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
                {block.heading}
              </h2>
            )}
            {block.description && (
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {block.description}
              </p>
            )}
          </div>
        )}
        
        <div className="relative">
          <div className={`relative overflow-hidden rounded-2xl bg-gray-900 shadow-lg ${getAspectRatioClass(block.orientation)}`}>
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src={videoUrl}
              poster={posterUrl || undefined}
              autoPlay={block.autoplay || false}
              muted={block.muted !== false} // default to true
              loop={block.loop || false}
              controls={block.controls !== false} // default to true
              playsInline
              preload="metadata"
            >
              <p className="text-white p-4">
                Your browser doesn&lsquo;t support HTML video. 
                <a href={videoUrl} className="underline hover:no-underline">
                  Download the video
                </a> instead.
              </p>
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}