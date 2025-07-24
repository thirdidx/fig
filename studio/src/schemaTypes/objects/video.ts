import {defineField, defineType} from 'sanity'
import {PlayIcon} from '@sanity/icons'

export const video = defineType({
  name: 'video',
  title: 'Video',
  type: 'object',
  icon: PlayIcon,
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading (Optional)',
      type: 'string',
      description: 'Optional heading for the video section',
    }),
    defineField({
      name: 'description',
      title: 'Description (Optional)',
      type: 'text',
      rows: 3,
      description: 'Optional description or caption for the video',
    }),
    defineField({
      name: 'videoFile',
      title: 'Video File',
      type: 'file',
      options: {
        accept: 'video/*',
      },
      validation: (Rule) => Rule.required(),
      description: 'Upload a video file (.mp4, .mov, .webm recommended)',
    }),
    defineField({
      name: 'orientation',
      title: 'Video Orientation',
      type: 'string',
      options: {
        list: [
          {title: 'Landscape (16:9)', value: 'landscape'},
          {title: 'Vertical (9:16)', value: 'vertical'},
          {title: 'Square (1:1)', value: 'square'},
          {title: 'Original', value: 'original'},
        ],
        layout: 'radio',
      },
      initialValue: 'landscape',
      description: 'Choose the aspect ratio and orientation for video display',
    }),
    defineField({
      name: 'autoplay',
      title: 'Autoplay',
      type: 'boolean',
      initialValue: false,
      description: 'Enable autoplay (note: most browsers require muted videos for autoplay)',
    }),
    defineField({
      name: 'muted',
      title: 'Muted',
      type: 'boolean',
      initialValue: true,
      description: 'Start video muted (recommended for autoplay)',
    }),
    defineField({
      name: 'loop',
      title: 'Loop',
      type: 'boolean',
      initialValue: false,
      description: 'Loop the video continuously',
    }),
    defineField({
      name: 'controls',
      title: 'Show Controls',
      type: 'boolean',
      initialValue: true,
      description: 'Show video player controls (play, pause, volume, etc.)',
    }),
    defineField({
      name: 'poster',
      title: 'Poster Image (Optional)',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Thumbnail image shown before video plays',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      orientation: 'orientation',
      media: 'poster',
    },
    prepare({title, orientation, media}) {
      const orientationLabel = {
        landscape: 'Landscape',
        vertical: 'Vertical', 
        square: 'Square',
        original: 'Original'
      }[orientation] || 'Unknown'
      
      return {
        title: title || 'Video',
        subtitle: `${orientationLabel} orientation`,
        media: media || PlayIcon,
      }
    },
  },
})