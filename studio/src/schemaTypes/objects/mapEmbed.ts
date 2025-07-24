import {defineField, defineType} from 'sanity'
import {PinIcon} from '@sanity/icons'

export const mapEmbed = defineType({
  name: 'mapEmbed',
  title: 'Map Embed',
  type: 'object',
  icon: PinIcon,
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
    }),
    defineField({
      name: 'locationName',
      title: 'Location Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
      rows: 2,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'googleMapsEmbedUrl',
      title: 'Google Maps Embed URL',
      type: 'url',
      description: 'Get this from Google Maps > Share > Embed a map',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      options: {
        list: [
          {title: 'White', value: 'white'},
          {title: 'Light (Cream)', value: 'light'},
          {title: 'Taupe (Light Brown)', value: 'taupe'},
          {title: 'Ochre (Brown)', value: 'ochre'},
          {title: 'Maroon (Dark Red)', value: 'maroon'},
          {title: 'Dark (Almost Black)', value: 'dark'},
        ],
        layout: 'dropdown',
      },
      initialValue: 'white',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'locationName',
    },
    prepare({title, subtitle}) {
      return {
        title: title || 'Map Embed',
        subtitle: subtitle || 'Location',
        media: PinIcon,
      }
    },
  },
})