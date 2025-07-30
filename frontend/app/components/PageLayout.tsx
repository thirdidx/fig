import CTA from "@/app/components/Cta";
import Info from "@/app/components/InfoSection";
import MailchimpOptIn from "@/app/components/MailchimpOptIn";
import ResendContactForm from "@/app/components/ResendContactForm";
import Accordion from "@/app/components/Accordion";
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

type ResendContactForm = {
  _type: "resendContactForm";
  _key?: string;
  heading: string;
  subheading?: string;
  description?: string;
  namePlaceholder?: string;
  emailPlaceholder?: string;
  subjectPlaceholder?: string;
  messagePlaceholder?: string;
  buttonText: string;
  successMessage?: string;
  errorMessage?: string;
  requiredFields?: {
    name?: boolean;
    email?: boolean;
    subject?: boolean;
    message?: boolean;
  };
  styling?: {
    layout?: "single" | "two-column";
    size?: "small" | "medium" | "large";
  };
};

type AccordionBlock = {
  _type: "accordion";
  _key?: string;
  heading: string;
  subheading?: string;
  description?: string;
  items: Array<{
    question: string;
    answer: string;
    _key: string;
  }>;
  styling?: {
    type?: "single" | "multiple";
    collapsible?: boolean;
    defaultOpen?: number;
    size?: "small" | "medium" | "large";
    variant?: "default" | "bordered" | "ghost";
  };
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

type PageLayoutItem =
  | CallToAction
  | InfoSection
  | MailchimpOptIn
  | ResendContactForm
  | AccordionBlock
  | Designers
  | People
  | Video
  | ImageCollection
  | SponsorBlock;

type PageLayout = {
  _type: "pageLayout";
  _key?: string;
  heading?: string;
  leftColumn?: PageLayoutItem[];
  rightColumn?: PageLayoutItem[];
  layoutType?: "splitScreen" | "sidebarLeft" | "sidebarRight";
  spacing?: "none" | "small" | "medium" | "large";
  backgroundColor?:
    | "transparent"
    | "light"
    | "white"
    | "taupe"
    | "ochre"
    | "maroon"
    | "dark";
  verticalPadding?: "none" | "small" | "medium" | "large" | "xl" | "screen";
};

type PageLayoutProps = {
  block: PageLayout;
  index: number;
};

const renderItem = (
  item: PageLayoutItem,
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
    case "resendContactForm":
      return (
        <ResendContactForm
          key={index}
          block={item as ResendContactForm}
          index={index}
          isInContainer={isInContainer}
        />
      );
    case "accordion":
      return (
        <Accordion
          key={index}
          block={item as AccordionBlock}
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

const getPaddingClass = (verticalPadding: string) => {
  switch (verticalPadding) {
    case "none":
      return "";
    case "small":
      return "py-4";
    case "medium":
      return "py-8";
    case "large":
      return "py-16";
    case "xl":
      return "py-24";
    case "screen":
      return "min-h-screen py-8";
    default:
      return "py-8";
  }
};

const getGapClass = (spacing: string) => {
  switch (spacing) {
    case "none":
      return "";
    case "small":
      return "gap-4";
    case "medium":
      return "gap-6";
    case "large":
      return "gap-8";
    default:
      return "gap-6";
  }
};

const getLayoutClasses = (layoutType: string) => {
  switch (layoutType) {
    case "sidebarLeft":
      return "grid-cols-1 lg:grid-cols-[1fr_2fr]";
    case "sidebarRight":
      return "grid-cols-1 lg:grid-cols-[2fr_1fr]";
    case "splitScreen":
    default:
      return "grid-cols-1 lg:grid-cols-2";
  }
};

const getColumnSpacing = (spacing: string) => {
  switch (spacing) {
    case "none":
      return "";
    case "small":
      return "space-y-4";
    case "medium":
      return "space-y-6";
    case "large":
      return "space-y-8";
    default:
      return "space-y-6";
  }
};

export default function PageLayout({ block }: PageLayoutProps) {
  const leftColumn = block.leftColumn || [];
  const rightColumn = block.rightColumn || [];
  const layoutType = block.layoutType || "splitScreen";
  const spacing = block.spacing || "medium";
  const backgroundColor = block.backgroundColor || "transparent";
  const verticalPadding = block.verticalPadding || "medium";

  if (!leftColumn.length && !rightColumn.length) {
    return null;
  }

  const isScreenHeight = verticalPadding === "screen";

  return (
    <div className={`w-full ${getBackgroundClass(backgroundColor)}`}>
      <div
        className={`container mx-auto ${getPaddingClass(verticalPadding)} ${isScreenHeight ? "flex flex-col justify-center" : ""}`}
      >
        {block.heading && (
          <div className="text-center mb-8">
            <h2
              className={`text-2xl ${backgroundColor === "dark" || backgroundColor === "maroon" ? "text-light" : "text-dark"}`}
            >
              {block.heading}
            </h2>
          </div>
        )}

        <div
          className={`grid ${getLayoutClasses(layoutType)} ${getGapClass(spacing)} ${isScreenHeight ? "h-full" : ""}`}
        >
          {/* Left Column */}
          <div className={`${getColumnSpacing(spacing)}`}>
            {leftColumn.map((item, index) => (
              <div key={`left-${index}`}>{renderItem(item, index, true)}</div>
            ))}
          </div>

          {/* Right Column */}
          <div className={`${getColumnSpacing(spacing)}`}>
            {rightColumn.map((item, index) => (
              <div key={`right-${index}`}>{renderItem(item, index, true)}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
