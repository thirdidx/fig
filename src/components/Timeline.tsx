// import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
import { Button } from '~/components/ui/button'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '~/components/ui/hover-card'

export default function Timeline() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" className="vaneer text-accent">
          Event Timeline
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-full max-w-4xl">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            {/* <h4 className="text-sm font-semibold">Timeline</h4> */}
            <ul className="list-inside flex flex-col gap-y-2 vaneer text-left">
              <li>6 PM Doors Open</li>
              <li>
                6-8 PM Cocktail Hour featuring Strolling Champagne Look by
                Buffalo Fashion House
              </li>
              <li>8-9 PM Fashion Show of 13 Cut and Sew Designers</li>
              <li>
                9-11 PM Afterparty with DJ Cutler and DJ Lisa Lux at Seneca One
              </li>
              <li>Afterparty with DJ Cutler and DJ Lisa Lux at Seneca One</li>
            </ul>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
