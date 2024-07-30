/* eslint-disable @next/next/no-img-element */
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '~/components/ui/tooltip'

export default function Sponsor({ sponsor }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <img
            src={sponsor.image}
            alt={sponsor.name}
            className="object-contain h-20"
          />
        </TooltipTrigger>
        <TooltipContent side="right" className="bg-black text-white border-black">
          <h5>{sponsor.sponsorship || sponsor.name}</h5>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
