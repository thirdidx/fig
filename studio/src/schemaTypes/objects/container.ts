import {defineField, defineType} from 'sanity'
import {ComponentIcon} from '@sanity/icons'

export const container = defineType({
  name: 'container',
  title: 'Container',
  type: 'object',
  icon: ComponentIcon,
  fields: [
    defineField({
      name: 'heading',
      title: 'Container Heading (Optional)',
      type: 'string',
      description: 'Optional heading for the entire container section',
    }),
    defineField({
      name: 'items',
      title: 'Container Items',
      type: 'array',
      of: [
        {type: 'callToAction'},
        {type: 'infoSection'},
        {type: 'mailchimpOptIn'},
        {type: 'resendContactForm'},
        {type: 'accordion'},
        {type: 'designers'},
        {type: 'people'},
        {type: 'sponsors'},
        {type: 'imageCollection'},
        {type: 'video'},
      ],
      validation: (Rule) => Rule.min(1).max(3).required(),
      description: 'Add 1-3 items. 1 item will be centered, 2 items will be split, 3 items will be arranged in a grid.',
    }),
    defineField({
      name: 'spacing',
      title: 'Spacing',
      type: 'string',
      options: {
        list: [
          {title: 'None', value: 'none'},
          {title: 'Small', value: 'small'},
          {title: 'Medium', value: 'medium'},
          {title: 'Large', value: 'large'},
        ],
        layout: 'radio',
      },
      initialValue: 'medium',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      options: {
        list: [
          {title: 'None (Transparent)', value: 'transparent'},
          {title: 'Light (Cream)', value: 'light'},
          {title: 'White', value: 'white'},
          {title: 'Taupe (Light Brown)', value: 'taupe'},
          {title: 'Ochre (Brown)', value: 'ochre'},
          {title: 'Maroon (Dark Red)', value: 'maroon'},
          {title: 'Dark (Almost Black)', value: 'dark'},
        ],
        layout: 'dropdown',
      },
      initialValue: 'transparent',
      description: 'Choose a background color for the container section',
    }),
    defineField({
      name: 'verticalPadding',
      title: 'Vertical Padding',
      type: 'string',
      options: {
        list: [
          {title: 'None', value: 'none'},
          {title: 'Small', value: 'small'},
          {title: 'Medium', value: 'medium'},
          {title: 'Large', value: 'large'},
          {title: 'Extra Large', value: 'xl'},
          {title: 'Full Screen Height', value: 'screen'},
        ],
        layout: 'dropdown',
      },
      initialValue: 'medium',
      description: 'Controls the vertical spacing/height of the container section',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      items: 'items',
    },
    prepare({title, items = []}) {
      const itemCount = items.length
      const subtitle = `Container with ${itemCount} item${itemCount !== 1 ? 's' : ''}`
      
      return {
        title: title || 'Container',
        subtitle,
        media: ComponentIcon,
      }
    },
  },
})