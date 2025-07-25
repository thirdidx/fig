import Image from "next/image";
import { urlForImage } from "@/sanity/lib/utils";

// Define types based on the schema
type Sponsor = {
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
};

type Sponsors = {
  _type: "sponsors";
  _key?: string;
  heading?: string;
  subheading?: string;
  sponsors?: Sponsor[]; // This will be populated by the GROQ query
  layout?: "grid" | "row" | "carousel";
  columns?: number;
  groupByTier?: boolean;
  showTierLabels?: boolean;
  logoSize?: "small" | "medium" | "large";
  backgroundColor?: "none" | "light-gray" | "white" | "dark";
};

type SponsorsProps = {
  block: Sponsors;
  index: number;
  isInContainer?: boolean;
};

const tierOrder = {
  platinum: 1,
  gold: 2,
  silver: 3,
  bronze: 4,
  supporting: 5,
};

const tierLabels = {
  platinum: "Platinum Sponsors",
  gold: "Gold Sponsors",
  silver: "Silver Sponsors",
  bronze: "Bronze Sponsors",
  supporting: "Supporting Sponsors",
};

const getLogoSizeClasses = (size: string = "medium") => {
  switch (size) {
    case "small":
      return "h-12 w-auto max-w-24";
    case "large":
      return "h-20 w-auto max-w-32";
    case "medium":
    default:
      return "h-16 w-auto max-w-28";
  }
};

const getGridClasses = (columns: number = 4, layout: string = "grid") => {
  if (layout === "row") {
    return "flex flex-wrap justify-center items-center gap-6";
  }
  if (layout === "carousel") {
    return "flex gap-6 pb-4";
  }

  switch (columns) {
    case 1:
      return "grid grid-cols-1 gap-6";
    case 2:
      return "grid grid-cols-1 md:grid-cols-2 gap-6";
    case 3:
      return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";
    case 4:
      return "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6";
    case 5:
      return "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6";
    case 6:
      return "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6";
    default:
      return "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6";
  }
};

const getBackgroundClasses = (backgroundColor: string = "none") => {
  switch (backgroundColor) {
    case "light-gray":
      return "bg-gray-50";
    case "white":
      return "bg-white";
    case "dark":
      return "bg-gray-900 text-white";
    case "none":
    default:
      return "";
  }
};

const SponsorItem = ({
  sponsor,
  logoSize,
  layout,
}: {
  sponsor: Sponsor;
  logoSize: string;
  layout: string;
}) => {
  
  const logoClasses = getLogoSizeClasses(logoSize);
  const isCarousel = layout === "carousel";

  const logoElement = (
    <div
      className={`flex items-center justify-center p-4 ${isCarousel ? "flex-shrink-0" : ""}`}
    >
      {sponsor.logo?.asset?._ref ? (
        <Image
          src={urlForImage(sponsor.logo)?.url() || ""}
          alt={sponsor.logo.alt || sponsor.name}
          width={150}
          height={80}
          className={`${logoClasses} object-contain transition-opacity hover:opacity-75`}
        />
      ) : (
        <div className="flex items-center justify-center text-gray-400 text-sm">
          No Logo
        </div>
      )}
    </div>
  );

  if (sponsor.url) {
    return (
      <a
        href={sponsor.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
        title={sponsor.name}
      >
        {logoElement}
      </a>
    );
  }

  return logoElement;
};

const groupSponsorsByTier = (sponsors: Sponsor[]) => {
  const grouped = sponsors.reduce(
    (acc, sponsor) => {
      const tier = sponsor.tier || "supporting";
      if (!acc[tier]) {
        acc[tier] = [];
      }
      acc[tier].push(sponsor);
      return acc;
    },
    {} as Record<string, Sponsor[]>
  );

  // Sort groups by tier order
  return Object.keys(grouped)
    .sort(
      (a, b) =>
        (tierOrder[a as keyof typeof tierOrder] || 99) -
        (tierOrder[b as keyof typeof tierOrder] || 99)
    )
    .map((tier) => ({
      tier,
      sponsors: grouped[tier],
    }));
};

export default function Sponsors({
  block,
  isInContainer = false,
}: SponsorsProps) {
  const sponsors = block.sponsors || [];
  
  const layout = block.layout || "grid";
  const columns = block.columns || 4;
  const logoSize = block.logoSize || "medium";
  const backgroundColor = block.backgroundColor || "none";
  const groupByTier = block.groupByTier || false;
  const showTierLabels = block.showTierLabels || false;

  if (!sponsors.length) {
    return null;
  }

  const backgroundClasses = getBackgroundClasses(backgroundColor);
  const gridClasses = getGridClasses(columns, layout);

  return (
    <div className={`py-4 ${backgroundClasses}`}>
      {/* Header */}
      {(block.heading || block.subheading) && (
        <div className="text-center mb-8">
          {block.heading && (
            <h2 className="text-2xl mb-2">
              {block.heading}
            </h2>
          )}
          {block.subheading && (
            <p className="text-lg text-gray-600">{block.subheading}</p>
          )}
        </div>
      )}

      {/* Sponsors Display */}
      {groupByTier ? (
        <div className="space-y-12">
          {groupSponsorsByTier(sponsors).map(
            ({ tier, sponsors: tierSponsors }) => (
              <div key={tier}>
                {showTierLabels && (
                  <h3 className="text-xl font-semibold text-center mb-6">
                    {tierLabels[tier as keyof typeof tierLabels] ||
                      `${tier.charAt(0).toUpperCase() + tier.slice(1)} Sponsors`}
                  </h3>
                )}
                {layout === "carousel" ? (
                  <div className="overflow-hidden group">
                    <div className="flex animate-marquee gap-6 pb-4 grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                      {[...tierSponsors, ...tierSponsors].map((sponsor, index) => (
                        <SponsorItem
                          key={`${sponsor._id}-${index}`}
                          sponsor={sponsor}
                          logoSize={logoSize}
                          layout={layout}
                        />
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className={gridClasses}>
                    {tierSponsors.map((sponsor) => (
                      <SponsorItem
                        key={sponsor._id}
                        sponsor={sponsor}
                        logoSize={logoSize}
                        layout={layout}
                      />
                    ))}
                  </div>
                )}
              </div>
            )
          )}
        </div>
      ) : layout === "carousel" ? (
        <div className="overflow-hidden group">
          <div className="flex animate-marquee gap-6 pb-4 grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
            {[...sponsors, ...sponsors].map((sponsor, index) => (
              <SponsorItem
                key={`${sponsor._id}-${index}`}
                sponsor={sponsor}
                logoSize={logoSize}
                layout={layout}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className={gridClasses}>
          {sponsors.map((sponsor) => (
            <SponsorItem
              key={sponsor._id}
              sponsor={sponsor}
              logoSize={logoSize}
              layout={layout}
            />
          ))}
        </div>
      )}
    </div>
  );
}
