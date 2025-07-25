import {defineField, defineType} from 'sanity'
import {CreditCardIcon} from '@sanity/icons'

export const sponsors = defineType({
  name: 'sponsors',
  title: 'Sponsors',
  type: 'object',
  icon: CreditCardIcon,
  groups: [
    {
      name: 'content',
      title: 'Content',
    },
    {
      name: 'display',
      title: 'Display',
    },
  ],
  fields: [
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
      group: 'content',
      description: 'Main heading for the sponsors section',
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
      group: 'content',
      description: 'Optional subheading or description',
    }),
    defineField({
      name: 'sponsors',
      title: 'Sponsors',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'sponsor'}],
        },
      ],
      group: 'content',
      validation: (Rule) => Rule.min(1),
      description: 'Select sponsors to display in this section',
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          {title: 'Grid', value: 'grid'},
          {title: 'Row', value: 'row'},
          {title: 'Carousel', value: 'carousel'},
        ],
        layout: 'radio',
      },
      initialValue: 'grid',
      group: 'display',
      description: 'How to display the sponsors',
    }),
    defineField({
      name: 'columns',
      title: 'Columns (Grid Layout)',
      type: 'number',
      initialValue: 4,
      validation: (Rule) => Rule.min(1).max(6),
      group: 'display',
      description: 'Number of columns for grid layout (1-6)',
      hidden: ({parent}) => parent?.layout !== 'grid',
    }),
    defineField({
      name: 'groupByTier',
      title: 'Group by Tier',
      type: 'boolean',
      initialValue: false,
      group: 'display',
      description: 'Group sponsors by their tier level',
    }),
    defineField({
      name: 'showTierLabels',
      title: 'Show Tier Labels',
      type: 'boolean',
      initialValue: false,
      group: 'display',
      description: 'Display tier labels when grouping by tier',
      hidden: ({parent}) => !parent?.groupByTier,
    }),
    defineField({
      name: 'logoSize',
      title: 'Logo Size',
      type: 'string',
      options: {
        list: [
          {title: 'Small', value: 'small'},
          {title: 'Medium', value: 'medium'},
          {title: 'Large', value: 'large'},
        ],
        layout: 'radio',
      },
      initialValue: 'medium',
      group: 'display',
      description: 'Size of sponsor logos',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      options: {
        list: [
          {title: 'None', value: 'none'},
          {title: 'Light Gray', value: 'light-gray'},
          {title: 'White', value: 'white'},
          {title: 'Dark', value: 'dark'},
        ],
        layout: 'radio',
      },
      initialValue: 'none',
      group: 'display',
      description: 'Background color for the sponsors section',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      sponsors: 'sponsors',
      layout: 'layout',
    },
    prepare({title, sponsors = [], layout}) {
      const sponsorCount = sponsors.length
      const subtitle = `${sponsorCount} sponsor${sponsorCount !== 1 ? 's' : ''} • ${layout} layout`
      
      return {
        title: title || 'Sponsors Section',
        subtitle,
        media: CreditCardIcon,
      }
    },
  },
})