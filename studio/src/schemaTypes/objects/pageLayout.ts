import {defineField, defineType} from 'sanity'
import {SplitHorizontalIcon} from '@sanity/icons'

export const pageLayout = defineType({
  name: 'pageLayout',
  title: 'Page Layout',
  type: 'object',
  icon: SplitHorizontalIcon,
  fields: [
    defineField({
      name: 'heading',
      title: 'Layout Heading (Optional)',
      type: 'string',
      description: 'Optional heading for the entire layout section',
    }),
    defineField({
      name: 'leftColumn',
      title: 'Left Column',
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
      validation: (Rule) => Rule.min(0).max(10),
      description: 'Add modules to the left column. Can stack multiple modules.',
    }),
    defineField({
      name: 'rightColumn',
      title: 'Right Column',
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
      validation: (Rule) => Rule.min(0).max(10),
      description: 'Add modules to the right column. Can stack multiple modules.',
    }),
    defineField({
      name: 'layoutType',
      title: 'Layout Type',
      type: 'string',
      options: {
        list: [
          {title: 'Split Screen (50/50)', value: 'splitScreen'},
          {title: 'Sidebar Left (33/67)', value: 'sidebarLeft'},
          {title: 'Sidebar Right (67/33)', value: 'sidebarRight'},
        ],
        layout: 'radio',
      },
      initialValue: 'splitScreen',
      description: 'Choose the column width distribution',
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
      description: 'Choose a background color for the layout section',
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
      description: 'Controls the vertical spacing/height of the layout section',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      leftColumn: 'leftColumn',
      rightColumn: 'rightColumn',
      layoutType: 'layoutType',
    },
    prepare({title, leftColumn = [], rightColumn = [], layoutType}) {
      const leftCount = leftColumn.length
      const rightCount = rightColumn.length
      const layoutTypeLabel = layoutType === 'splitScreen' ? 'Split Screen' : 
                             layoutType === 'sidebarLeft' ? 'Sidebar Left' : 'Sidebar Right'
      const subtitle = `${layoutTypeLabel} | L:${leftCount} R:${rightCount}`
      
      return {
        title: title || 'Page Layout',
        subtitle,
        media: SplitHorizontalIcon,
      }
    },
  },
})