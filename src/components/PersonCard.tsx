import Image from 'next/image'

import { cn } from '~/lib/utils'

// import { Album } from '../data/albums'
// import { playlists } from '../data/playlists'

interface AlbumArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
  // album: Album
  person: any
  aspectRatio?: 'portrait' | 'square'
  width?: number
  height?: number
}

export default function PersonCard({
  person,
  aspectRatio = 'portrait',
  className,
  ...props
}: AlbumArtworkProps) {
  return (
    <div className={cn('space-y-3', className)} {...props}>
      <div className="overflow-hidden rounded-md">
        <Image
          src={person.image}
          alt={person.name}
          width={400}
          height={600}
          className={cn(
            'w-full h-auto object-cover transition-all hover:scale-105 aspect-[3/4]',
          )}
        />
      </div>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none">{person.name}</h3>
        <p className="text-xs text-muted-foreground">
          {person.role || person.brand}
        </p>
      </div>
    </div>
  )
}
