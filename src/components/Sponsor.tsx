/* eslint-disable @next/next/no-img-element */
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '~/components/ui/tooltip'

export default function Sponsor({ sponsor, side }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {sponsor?.href && sponsor?.href !== '#' ? (
            <a href={sponsor?.href} target="_blank">
              <img
                src={sponsor.image}
                alt={sponsor.name}
                className="object-contain h-20"
              />
            </a>
          ) : (
            <img
              src={sponsor.image}
              alt={sponsor.name}
              className="object-contain h-20"
            />
          )}
        </TooltipTrigger>
        <TooltipContent
          side={side}
          className="bg-black text-white border-black"
        >
          <h5>{sponsor.sponsorship || sponsor.name}</h5>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
