import {defineField, defineType} from 'sanity'
import {UsersIcon} from '@sanity/icons'

export const designers = defineType({
  name: 'designers',
  title: 'Designers',
  type: 'object',
  icon: UsersIcon,
  groups: [
    {
      name: 'content',
      title: 'Content',
    },
    {
      name: 'design',
      title: 'Design',
    },
  ],
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'designers',
      title: 'Designers',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'person'}]}],
      group: 'content',
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      description: 'Toggles between grid image view and list text view',
      type: 'string',
      options: {
        list: [
          {title: 'Grid', value: 'grid'},
          {title: 'List', value: 'list'},
        ],
      },
      group: 'design',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'subheading',
    },
    prepare({title}) {
      return {
        title: title || 'Untitled Designers Collection',
        subtitle: 'Collection of people',
      }
    },
  },
})
