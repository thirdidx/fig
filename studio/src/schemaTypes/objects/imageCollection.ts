import {defineField, defineType} from 'sanity'
import {ImagesIcon} from '@sanity/icons'

export const imageCollection = defineType({
  name: 'imageCollection',
  title: 'Image Collection',
  type: 'object',
  icon: ImagesIcon,
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
      title: 'Collection Heading',
      type: 'string',
      group: 'content',
      description: 'Main heading for the image collection',
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
      group: 'content',
      description: 'Optional subheading or description',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      group: 'content',
      description: 'Optional longer description text',
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description: 'Important for SEO and accessibility',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              description: 'Optional caption text displayed with the image',
            },
            {
              name: 'credit',
              type: 'string',
              title: 'Photo Credit',
              description: 'Optional photographer or source credit',
            },
          ],
        },
      ],
      group: 'content',
      validation: (Rule) => Rule.min(1).required(),
      description: 'Add images to display in the collection',
    }),
    defineField({
      name: 'layout',
      title: 'Layout Type',
      type: 'string',
      options: {
        list: [
          {title: 'Carousel', value: 'carousel'},
          {title: 'Grid', value: 'grid'},
          {title: 'Masonry', value: 'masonry'},
          {title: 'Slideshow', value: 'slideshow'},
        ],
        layout: 'radio',
      },
      initialValue: 'carousel',
      group: 'display',
      description: 'How to display the image collection',
    }),
    defineField({
      name: 'aspectRatio',
      title: 'Image Aspect Ratio',
      type: 'string',
      options: {
        list: [
          {title: 'Original', value: 'original'},
          {title: 'Square (1:1)', value: 'square'},
          {title: 'Landscape (16:9)', value: 'landscape'},
          {title: 'Portrait (4:5)', value: 'portrait'},
          {title: 'Wide (21:9)', value: 'wide'},
        ],
        layout: 'radio',
      },
      initialValue: 'original',
      group: 'display',
      description: 'Aspect ratio for displayed images',
    }),
    defineField({
      name: 'imageSize',
      title: 'Image Size',
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
      description: 'Size of images in the collection',
    }),
    defineField({
      name: 'showCaptions',
      title: 'Show Captions',
      type: 'boolean',
      initialValue: true,
      group: 'display',
      description: 'Display image captions when available',
    }),
    defineField({
      name: 'showCredits',
      title: 'Show Photo Credits',
      type: 'boolean',
      initialValue: false,
      group: 'display',
      description: 'Display photo credits when available',
    }),
    defineField({
      name: 'autoplay',
      title: 'Autoplay (Carousel/Slideshow)',
      type: 'boolean',
      initialValue: false,
      group: 'display',
      description: 'Automatically advance through images',
      hidden: ({parent}) => !['carousel', 'slideshow'].includes(parent?.layout),
    }),
    defineField({
      name: 'autoplaySpeed',
      title: 'Autoplay Speed (seconds)',
      type: 'number',
      initialValue: 5,
      validation: (Rule) => Rule.min(1).max(30),
      group: 'display',
      description: 'Time between automatic advances (1-30 seconds)',
      hidden: ({parent}) => !parent?.autoplay,
    }),
    defineField({
      name: 'showArrows',
      title: 'Show Navigation Arrows',
      type: 'boolean',
      initialValue: true,
      group: 'display',
      description: 'Show previous/next arrows for navigation',
      hidden: ({parent}) => !['carousel', 'slideshow'].includes(parent?.layout),
    }),
    defineField({
      name: 'showDots',
      title: 'Show Dot Indicators',
      type: 'boolean',
      initialValue: true,
      group: 'display',
      description: 'Show dot indicators for navigation',
      hidden: ({parent}) => !['carousel', 'slideshow'].includes(parent?.layout),
    }),
    defineField({
      name: 'columns',
      title: 'Columns (Grid Layout)',
      type: 'number',
      initialValue: 3,
      validation: (Rule) => Rule.min(1).max(6),
      group: 'display',
      description: 'Number of columns for grid layout (1-6)',
      hidden: ({parent}) => parent?.layout !== 'grid',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      images: 'images',
      layout: 'layout',
    },
    prepare({title, images = [], layout}) {
      const imageCount = images.length
      const subtitle = `${imageCount} image${imageCount !== 1 ? 's' : ''} • ${layout} layout`
      
      return {
        title: title || 'Image Collection',
        subtitle,
        media: images[0] || ImagesIcon,
      }
    },
  },
})