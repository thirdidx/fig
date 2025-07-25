import {defineField, defineType} from 'sanity'
import {UsersIcon} from '@sanity/icons'

export const people = defineType({
  name: 'people',
  title: 'People',
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
      name: 'people',
      title: 'Team Members',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'person'}]}],
      group: 'content',
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      description: 'Choose how to display the team members',
      type: 'string',
      options: {
        list: [
          {title: 'Grid', value: 'grid'},
          {title: 'List', value: 'list'},
        ],
      },
      initialValue: 'grid',
      group: 'design',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'subheading',
      people: 'people',
    },
    prepare({title, people}) {
      const peopleCount = people?.length || 0
      return {
        title: title || 'Team Members',
        subtitle: `${peopleCount} team member${peopleCount !== 1 ? 's' : ''}`,
      }
    },
  },
})