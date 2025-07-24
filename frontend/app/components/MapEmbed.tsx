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

type MapEmbedProps = {
  block: MapEmbed;
  index: number;
  isInContainer?: boolean;
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
      return 'bg-white';
  }
};

const getTextColorClass = (backgroundColor: string) => {
  switch (backgroundColor) {
    case 'maroon':
    case 'dark':
      return 'text-light';
    default:
      return 'text-dark';
  }
};

export default function MapEmbed({ block, isInContainer = false }: MapEmbedProps) {
  const bgClass = getBackgroundClass(block.backgroundColor || 'white');
  const textClass = getTextColorClass(block.backgroundColor || 'white');

  return (
    <div className={isInContainer ? "w-full h-full" : "container mx-auto my-12"}>
      <div className={`${bgClass} ${isInContainer ? 'w-full h-full' : 'rounded-lg shadow-sm max-w-4xl mx-auto'} overflow-hidden`}>
        <div className="p-6">
          <h3 className={`text-lg font-accent uppercase ${textClass === 'text-light' ? 'text-light' : 'text-maroon'} mb-4`}>
            {block.heading}
          </h3>
          {block.subheading && (
            <p className={`${textClass} text-sm mb-4`}>
              {block.subheading}
            </p>
          )}
          <div className="mb-4">
            <div className={`font-bold ${textClass}`}>{block.locationName}</div>
            <div className={`${textClass} text-sm`}>{block.address}</div>
          </div>
        </div>
        <div className="h-48 bg-gray-200">
          <iframe
            src={block.googleMapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className={isInContainer ? '' : 'rounded-b-lg'}
          />
        </div>
      </div>
    </div>
  );
}