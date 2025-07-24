import CTA from "@/app/components/Cta";
import Info from "@/app/components/InfoSection";
import ImageCollection from "@/app/components/ImageCollection";
import MapEmbed from "@/app/components/MapEmbed";
import { CallToAction, InfoSection } from "@/sanity.types";

type ImageCollection = {
  _type: "imageCollection";
  _key?: string;
  heading?: string;
  subheading?: string;
  description?: string;
  images: Array<{
    _key: string;
    _type: "image";
    asset?: any;
    alt: string;
    caption?: string;
    credit?: string;
  }>;
  layout?: "carousel" | "grid" | "masonry" | "slideshow";
  aspectRatio?: "original" | "square" | "landscape" | "portrait" | "wide";
  imageSize?: "small" | "medium" | "large";
  showCaptions?: boolean;
  showCredits?: boolean;
  autoplay?: boolean;
  autoplaySpeed?: number;
  showArrows?: boolean;
  showDots?: boolean;
  columns?: number;
};

type MapEmbed = {
  _type: "mapEmbed";
  _key?: string;
  heading: string;
  subheading?: string;
  locationName: string;
  address: string;
  googleMapsEmbedUrl: string;
  backgroundColor?: "white" | "light" | "taupe" | "ochre" | "maroon" | "dark";
};

type BentoItem = {
  gridSize: "small" | "medium" | "large" | "xl" | "wide-medium";
  content: CallToAction | InfoSection | ImageCollection | MapEmbed;
  _key: string;
};

type BentoGrid = {
  _type: "bentoGrid";
  _key?: string;
  heading?: string;
  backgroundColor?: "light" | "white" | "taupe" | "ochre" | "maroon" | "dark";
  items: BentoItem[];
};

type BentoGridProps = {
  block: BentoGrid;
  index: number;
};

const getBackgroundClass = (backgroundColor: string) => {
  switch (backgroundColor) {
    case 'light':
      return 'bg-light';
    case 'white':
      return 'bg-white';
    case 'taupe':
      return 'bg-taupe';
    case 'ochre':
      return 'bg-ochre';
    case 'maroon':
      return 'bg-maroon';
    case 'dark':
      return 'bg-dark';
    default:
      return 'bg-light';
  }
};

const getGridClasses = (gridSize: string) => {
  switch (gridSize) {
    case 'small':
      return 'col-span-1 lg:col-span-1';
    case 'medium':
      return 'col-span-1 md:col-span-2 lg:col-span-2';
    case 'large':
      return 'col-span-1 md:col-span-2 lg:col-span-3 row-span-2';
    case 'xl':
      return 'col-span-1 md:col-span-2 lg:col-span-4';
    case 'wide-medium':
      return 'col-span-1 md:col-span-2 lg:col-span-2 row-span-2';
    default:
      return 'col-span-1';
  }
};

const renderBentoItem = (item: BentoItem, index: number) => {
  const content = item.content;
  
  switch (content._type) {
    case 'callToAction':
      return (
        <CTA 
          key={item._key} 
          block={content as CallToAction} 
          index={index} 
          isInContainer={true} 
        />
      );
    case 'infoSection':
      return (
        <Info 
          key={item._key} 
          block={content as InfoSection} 
          index={index} 
          isInContainer={true} 
        />
      );
    case 'imageCollection':
      return (
        <ImageCollection
          key={item._key}
          block={content as ImageCollection}
          index={index}
          isInContainer={true}
        />
      );
    case 'mapEmbed':
      return (
        <MapEmbed
          key={item._key}
          block={content as MapEmbed}
          index={index}
          isInContainer={true}
        />
      );
    default:
      return null;
  }
};

export default function BentoGridCMS({ block }: BentoGridProps) {
  const items = block.items || [];
  const backgroundColor = block.backgroundColor || 'light';

  if (!items.length) {
    return null;
  }

  return (
    <section className={`${getBackgroundClass(backgroundColor)} py-16 px-4`}>
      <div className="container mx-auto max-w-7xl">
        {block.heading && (
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${backgroundColor === 'dark' || backgroundColor === 'maroon' ? 'text-light' : 'text-dark'}`}>
              {block.heading}
            </h2>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-auto">
          {items.map((item: BentoItem, index: number) => (
            <div 
              key={item._key}
              className={`${getGridClasses(item.gridSize)} rounded-lg overflow-hidden`}
            >
              {renderBentoItem(item, index)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}