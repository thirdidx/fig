import {defineField, defineType} from 'sanity'
import {BlockElementIcon} from '@sanity/icons'

export const bentoGrid = defineType({
  name: 'bentoGrid',
  title: 'Bento Grid',
  type: 'object',
  icon: BlockElementIcon,
  fields: [
    defineField({
      name: 'heading',
      title: 'Grid Heading (Optional)',
      type: 'string',
      description: 'Optional heading for the entire bento grid section',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      options: {
        list: [
          {title: 'Light (Cream)', value: 'light'},
          {title: 'White', value: 'white'},
          {title: 'Taupe (Light Brown)', value: 'taupe'},
          {title: 'Ochre (Brown)', value: 'ochre'},
          {title: 'Maroon (Dark Red)', value: 'maroon'},
          {title: 'Dark (Almost Black)', value: 'dark'},
        ],
        layout: 'dropdown',
      },
      initialValue: 'light',
    }),
    defineField({
      name: 'items',
      title: 'Grid Items',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'bentoItem',
          title: 'Bento Grid Item',
          fields: [
            defineField({
              name: 'gridSize',
              title: 'Grid Size',
              type: 'string',
              options: {
                list: [
                  {title: 'Small (1x1)', value: 'small'},
                  {title: 'Medium (2x1)', value: 'medium'},
                  {title: 'Large (3x2)', value: 'large'},
                  {title: 'Extra Large (4x1)', value: 'xl'},
                  {title: 'Wide Medium (2x2)', value: 'wide-medium'},
                ],
                layout: 'dropdown',
              },
              initialValue: 'small',
              description: 'Controls how much space this item takes in the grid',
            }),
            defineField({
              name: 'content',
              title: 'Content',
              type: 'reference',
              to: [
                {type: 'infoSection'},
                {type: 'callToAction'},
                {type: 'imageCollection'},
                {type: 'mapEmbed'},
              ],
              validation: Rule => Rule.required(),
            }),
          ],
          preview: {
            select: {
              gridSize: 'gridSize',
              contentType: 'content._type',
              contentTitle: 'content.heading',
            },
            prepare({gridSize, contentType, contentTitle}) {
              return {
                title: contentTitle || 'Bento Item',
                subtitle: `${gridSize} - ${contentType}`,
              }
            },
          },
        },
      ],
      validation: Rule => Rule.min(1).max(8),
      description: 'Add 1-8 items for the bento grid layout. Items will automatically arrange in the grid.',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      items: 'items',
    },
    prepare({title, items = []}) {
      const itemCount = items.length
      const subtitle = `Bento Grid with ${itemCount} item${itemCount !== 1 ? 's' : ''}`
      
      return {
        title: title || 'Bento Grid',
        subtitle,
        media: BlockElementIcon,
      }
    },
  },
})