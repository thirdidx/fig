import {defineField, defineType} from 'sanity'
import {CreditCardIcon} from '@sanity/icons'

export const sponsor = defineType({
  name: 'sponsor',
  title: 'Sponsor',
  type: 'document',
  icon: CreditCardIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Sponsor Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Name of the sponsor organization',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility',
        },
      ],
    }),
    defineField({
      name: 'url',
      title: 'Website URL',
      type: 'url',
      validation: (Rule) => Rule.uri({
        scheme: ['http', 'https'],
      }),
      description: 'Sponsor website or landing page URL',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Optional description of the sponsor',
    }),
    defineField({
      name: 'tier',
      title: 'Sponsor Tier',
      type: 'string',
      options: {
        list: [
          {title: 'Platinum', value: 'platinum'},
          {title: 'Gold', value: 'gold'},
          {title: 'Silver', value: 'silver'},
          {title: 'Bronze', value: 'bronze'},
          {title: 'Supporting', value: 'supporting'},
        ],
        layout: 'radio',
      },
      description: 'Sponsor tier level for grouping and display ordering',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Sponsor',
      type: 'boolean',
      initialValue: false,
      description: 'Mark as featured for special prominence',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'tier',
      media: 'logo',
    },
    prepare({title, subtitle, media}) {
      return {
        title,
        subtitle: subtitle ? `${subtitle.charAt(0).toUpperCase() + subtitle.slice(1)} Sponsor` : 'Sponsor',
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Name',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }]
    },
    {
      title: 'Tier',
      name: 'tierDesc',
      by: [{ field: 'tier', direction: 'desc' }]
    },
  ],
})