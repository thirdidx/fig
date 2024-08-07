/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

import { Button } from '~/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'

export default function VertVideo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative w-full h-full">
          <img
            className="w-[48px] h-auto cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[2]"
            src="/i-play.svg"
            alt=""
          />
          <Image
            className="absolute left-0 top-0 z-[1]"
            src="/launch-thumbnail.jpg"
            alt=""
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-calc(100vw_-_4rem) overflow-hidden sm:max-w-[665px]">
        <DialogHeader>
          <DialogTitle>&nbsp;</DialogTitle>
          {/* <DialogDescription></DialogDescription> */}
        </DialogHeader>
        <div className="w-full h-[calc(100vh_-_20vh)] relative aspect-[9/16]">
          <video
            controls
            autoPlay
            // loop
            // muted
            className="max-w-[calc(100vw_-_3rem)] sm:max-w-full w-full h-full md:object-cover outline-none"
          >
            <source src="/fig-launch-2024.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <DialogFooter>
          {/* <Button type="submit">Save changes</Button> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
