import {defineField, defineType} from 'sanity'
import {EnvelopeIcon} from '@sanity/icons'

export const mailchimpOptIn = defineType({
  name: 'mailchimpOptIn',
  title: 'Mailchimp Opt-in',
  type: 'object',
  icon: EnvelopeIcon,
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Main heading for the opt-in form',
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
      name: 'formAction',
      title: 'Form Action URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
      description: 'Mailchimp form action URL (from your Mailchimp form embed code)',
    }),
    defineField({
      name: 'listId',
      title: 'List ID',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Mailchimp audience/list ID',
    }),
    defineField({
      name: 'formId',
      title: 'Form ID',
      type: 'string',
      description: 'Optional form ID for tracking',
    }),
    defineField({
      name: 'emailPlaceholder',
      title: 'Email Placeholder Text',
      type: 'string',
      initialValue: 'Enter your email address',
      description: 'Placeholder text for the email input field',
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      initialValue: 'Subscribe',
      validation: (Rule) => Rule.required(),
      description: 'Text for the submit button',
    }),
    defineField({
      name: 'successMessage',
      title: 'Success Message',
      type: 'string',
      initialValue: 'Thanks for subscribing!',
      description: 'Message shown after successful subscription',
    }),
    defineField({
      name: 'errorMessage',
      title: 'Error Message',
      type: 'string',
      initialValue: 'Something went wrong. Please try again.',
      description: 'Message shown if subscription fails',
    }),
    defineField({
      name: 'gdprCompliance',
      title: 'GDPR Compliance Text',
      type: 'text',
      rows: 2,
      description: 'Optional GDPR compliance notice (e.g., "By subscribing, you agree to our privacy policy")',
    }),
    defineField({
      name: 'requiredFields',
      title: 'Additional Required Fields',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'fieldName',
              title: 'Field Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'fieldType',
              title: 'Field Type',
              type: 'string',
              options: {
                list: [
                  {title: 'Text', value: 'text'},
                  {title: 'Email', value: 'email'},
                  {title: 'Number', value: 'number'},
                  {title: 'Tel', value: 'tel'},
                ],
              },
              initialValue: 'text',
            },
            {
              name: 'placeholder',
              title: 'Placeholder',
              type: 'string',
            },
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'fieldType',
            },
          },
        },
      ],
      description: 'Additional form fields (beyond email) required by your Mailchimp form',
    }),
    defineField({
      name: 'styling',
      title: 'Styling Options',
      type: 'object',
      fields: [
        {
          name: 'layout',
          title: 'Layout',
          type: 'string',
          options: {
            list: [
              {title: 'Inline (horizontal)', value: 'inline'},
              {title: 'Stacked (vertical)', value: 'stacked'},
            ],
          },
          initialValue: 'inline',
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
    },
    prepare({title}) {
      return {
        title: title || 'Mailchimp Opt-in',
        subtitle: 'Newsletter signup form',
        media: EnvelopeIcon,
      }
    },
  },
})