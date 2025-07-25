import {defineField, defineType} from 'sanity'
import {StackCompactIcon} from '@sanity/icons'

export const accordion = defineType({
  name: 'accordion',
  title: 'Accordion (FAQ)',
  type: 'object',
  icon: StackCompactIcon,
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Main heading for the accordion section',
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
      description: 'Optional subheading or description',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Optional longer description text',
    }),
    defineField({
      name: 'items',
      title: 'Accordion Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'question',
              title: 'Question',
              type: 'string',
              validation: (Rule) => Rule.required(),
              description: 'The question or accordion item title',
            },
            {
              name: 'answer',
              title: 'Answer',
              type: 'text',
              rows: 4,
              validation: (Rule) => Rule.required(),
              description: 'The answer or accordion item content',
            },
          ],
          preview: {
            select: {
              title: 'question',
              subtitle: 'answer',
            },
            prepare({title, subtitle}) {
              return {
                title: title || 'Untitled Question',
                subtitle: subtitle ? `${subtitle.substring(0, 50)}...` : 'No answer provided',
              }
            },
          },
        },
      ],
      validation: (Rule) => Rule.min(1).required(),
      description: 'Add FAQ items with questions and answers',
    }),
    defineField({
      name: 'styling',
      title: 'Styling Options',
      type: 'object',
      fields: [
        {
          name: 'type',
          title: 'Accordion Type',
          type: 'string',
          options: {
            list: [
              {title: 'Single (Only one item can be open)', value: 'single'},
              {title: 'Multiple (Multiple items can be open)', value: 'multiple'},
            ],
          },
          initialValue: 'single',
          description: 'Choose whether multiple items can be open at once',
        },
        {
          name: 'collapsible',
          title: 'Collapsible',
          type: 'boolean',
          initialValue: true,
          description: 'Allow all items to be closed (only applies to single type)',
        },
        {
          name: 'defaultOpen',
          title: 'Default Open Item',
          type: 'number',
          description: 'Index of item to open by default (0 for first item, leave empty for none)',
          validation: (Rule) => Rule.min(0),
        },
        {
          name: 'size',
          title: 'Size',
          type: 'string',
          options: {
            list: [
              {title: 'Small', value: 'small'},
              {title: 'Medium', value: 'medium'},
              {title: 'Large', value: 'large'},
            ],
          },
          initialValue: 'medium',
        },
        {
          name: 'variant',
          title: 'Visual Style',
          type: 'string',
          options: {
            list: [
              {title: 'Default', value: 'default'},
              {title: 'Bordered', value: 'bordered'},
              {title: 'Ghost', value: 'ghost'},
            ],
          },
          initialValue: 'default',
        },
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'subheading',
      items: 'items',
    },
    prepare({title, subtitle, items = []}) {
      const itemCount = items.length
      const subtitleText = subtitle || `${itemCount} FAQ item${itemCount !== 1 ? 's' : ''}`
      
      return {
        title: title || 'FAQ Accordion',
        subtitle: subtitleText,
        media: StackCompactIcon,
      }
    },
  },
})