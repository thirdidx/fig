import CTA from "@/app/components/Cta";
import Info from "@/app/components/InfoSection";
import MailchimpOptIn from "@/app/components/MailchimpOptIn";
import DesignersBlock from "@/app/components/DesignersBlock";
import PeopleBlock from "@/app/components/PeopleBlock";
import VideoBlock from "@/app/components/VideoBlock";
import ImageCollection from "@/app/components/ImageCollection";
import Sponsors from "@/app/components/Sponsors";
import { CallToAction, InfoSection, Designers } from "@/sanity.types";

// Define types since some may not be in generated types yet
type MailchimpOptIn = {
  _type: "mailchimpOptIn";
  _key?: string;
  heading: string;
  subheading?: string;
  description?: string;
  formAction: string;
  listId: string;
  formId?: string;
  emailPlaceholder?: string;
  buttonText: string;
  successMessage?: string;
  errorMessage?: string;
  gdprCompliance?: string;
  requiredFields?: Array<{
    fieldName: string;
    fieldType: "text" | "email" | "number" | "tel";
    placeholder?: string;
    label: string;
    _key: string;
  }>;
  styling?: {
    layout?: "inline" | "stacked";
    size?: "small" | "medium" | "large";
  };
};

type People = {
  _type: "people";
  _key?: string;
  heading?: string;
  people?: Array<{
    _id: string;
    firstName: string;
    lastName: string;
    picture: {
      asset?: any;
      alt?: string;
    };
  }>;
  layout?: "grid" | "list";
};

type Video = {
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

type SponsorBlock = {
  _type: "sponsors";
  _key?: string;
  heading?: string;
  subheading?: string;
  sponsors?: Array<{
    _id: string;
    _type: "sponsor";
    name: string;
    logo: {
      asset?: {
        _ref: string;
        _type: "reference";
      };
      hotspot?: any;
      crop?: any;
      alt?: string;
      _type: "image";
    };
    url?: string;
    description?: string;
    tier?: "platinum" | "gold" | "silver" | "bronze" | "supporting";
    featured?: boolean;
  }>;
  layout?: "grid" | "row" | "carousel";
  columns?: number;
  groupByTier?: boolean;
  showTierLabels?: boolean;
  logoSize?: "small" | "medium" | "large";
  backgroundColor?: "none" | "light-gray" | "white" | "dark";
};

type Container = {
  _type: "container";
  _key?: string;
  heading?: string;
  spacing?: "small" | "medium" | "large";
  backgroundColor?:
    | "transparent"
    | "light"
    | "white"
    | "taupe"
    | "ochre"
    | "maroon"
    | "dark";
  verticalPadding?: "none" | "small" | "medium" | "large" | "xl" | "screen";
  items?: (
    | CallToAction
    | InfoSection
    | MailchimpOptIn
    | Designers
    | People
    | Video
    | ImageCollection
    | SponsorBlock
  )[];
};

type ContainerProps = {
  block: Container;
  index: number;
};

const renderItem = (
  item:
    | CallToAction
    | InfoSection
    | MailchimpOptIn
    | Designers
    | People
    | Video
    | ImageCollection
    | SponsorBlock,
  index: number,
  isInContainer: boolean = true
) => {
  switch (item._type) {
    case "callToAction":
      return (
        <CTA
          key={index}
          block={item as CallToAction}
          index={index}
          isInContainer={isInContainer}
        />
      );
    case "infoSection":
      return (
        <Info
          key={index}
          block={item as InfoSection}
          index={index}
          isInContainer={isInContainer}
        />
      );
    case "mailchimpOptIn":
      return (
        <MailchimpOptIn
          key={index}
          block={item as MailchimpOptIn}
          index={index}
          isInContainer={isInContainer}
        />
      );
    case "designers":
      return (
        <DesignersBlock
          key={index}
          block={{
            _type: "designersBlock" as const,
            _key: `designers-${index}`,
            heading: (item as Designers).heading,
            designers: (item as any).designers || [],
          }}
          index={index}
          isInContainer={isInContainer}
        />
      );
    case "people":
      return (
        <PeopleBlock
          key={index}
          block={{
            _type: "people" as const,
            _key: `people-${index}`,
            heading: (item as People).heading,
            people: (item as any).people || [],
          }}
          index={index}
          isInContainer={isInContainer}
        />
      );
    case "video":
      return (
        <VideoBlock
          key={index}
          block={item as Video}
          index={index}
          isInContainer={isInContainer}
        />
      );
    case "imageCollection":
      return (
        <ImageCollection
          key={index}
          block={item as ImageCollection}
          index={index}
          isInContainer={isInContainer}
        />
      );
    case "sponsors":
      return (
        <Sponsors
          key={index}
          block={item as SponsorBlock}
          index={index}
          isInContainer={isInContainer}
        />
      );
    default:
      return null;
  }
};

const getBackgroundClass = (backgroundColor: string) => {
  switch (backgroundColor) {
    case "light":
      return "bg-light";
    case "white":
      return "bg-white";
    case "taupe":
      return "bg-taupe";
    case "ochre":
      return "bg-ochre";
    case "maroon":
      return "bg-maroon";
    case "dark":
      return "bg-dark";
    case "transparent":
    default:
      return "";
  }
};

const getGridClass = (itemCount: number) => {
  switch (itemCount) {
    case 1:
      return "flex justify-center";
    case 2:
      return "grid grid-cols-1 lg:grid-cols-2";
    case 3:
    default:
      return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
  }
};

export default function Container({ block }: ContainerProps) {
  const items = block.items || [];
  const itemCount = items.length;
  const spacing = block.spacing || "medium";
  const backgroundColor = block.backgroundColor || "transparent";
  const verticalPadding = block.verticalPadding || "medium";



  if (!items.length) {
    return null;
  }

  const isScreenHeight = verticalPadding === "screen";

  return (
    <div className={`w-full ${getBackgroundClass(backgroundColor)}`}>
      {block.heading && (
        <div className="text-center mb-8 px-4">
          <h2
            className={`text-2xl ${backgroundColor === "dark" || backgroundColor === "maroon" ? "text-light" : "text-dark"}`}
          >
            {block.heading}
          </h2>
        </div>
      )}

      <div
        className={`${getGridClass(itemCount)} ${isScreenHeight ? "h-full" : ""}`}
      >
        {items.map(
          (
            item:
              | CallToAction
              | InfoSection
              | MailchimpOptIn
              | Designers
              | People
              | Video
              | ImageCollection
              | SponsorBlock,
            index: number
          ) => (
            <div
              key={index}
              className={`${itemCount === 1 ? "w-full max-w-3xl" : "w-full"} ${isScreenHeight && itemCount === 2 ? "h-full flex items-center justify-center" : ""}`}
            >
              {renderItem(item, index, true)}
            </div>
          )
        )}
      </div>
    </div>
  );
}
