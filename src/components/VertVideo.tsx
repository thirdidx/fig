/* eslint-disable @next/next/no-img-element */
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
        <img
          className="w-[48px] h-auto cursor-pointer"
          src="/i-play.svg"
          alt=""
        />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[665px]">
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
            className="w-full h-full object-cover outline-none"
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
