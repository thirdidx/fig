import {defineField, defineType} from 'sanity'
import {TextIcon} from '@sanity/icons'

export const hero = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  icon: TextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'mobileImage',
      title: 'Mobile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'desktopImage',
      title: 'Desktop Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'video',
      title: 'Video',
      type: 'file',
      options: {
        accept: 'video/*',
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title || 'Untitled Hero',
        subtitle: 'Hero Section',
      }
    },
  },
})
