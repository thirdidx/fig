import {defineField, defineType} from 'sanity'
import {EnvelopeIcon} from '@sanity/icons'

export const resendContactForm = defineType({
  name: 'resendContactForm',
  title: 'Resend Contact Form',
  type: 'object',
  icon: EnvelopeIcon,
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Main heading for the contact form',
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
      name: 'namePlaceholder',
      title: 'Name Placeholder Text',
      type: 'string',
      initialValue: 'Your Name',
      description: 'Placeholder text for the name input field',
    }),
    defineField({
      name: 'emailPlaceholder',
      title: 'Email Placeholder Text',
      type: 'string',
      initialValue: 'Your Email Address',
      description: 'Placeholder text for the email input field',
    }),
    defineField({
      name: 'subjectPlaceholder',
      title: 'Subject Placeholder Text',
      type: 'string',
      initialValue: 'Subject',
      description: 'Placeholder text for the subject input field',
    }),
    defineField({
      name: 'messagePlaceholder',
      title: 'Message Placeholder Text',
      type: 'string',
      initialValue: 'Your Message',
      description: 'Placeholder text for the message textarea field',
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      initialValue: 'Send Message',
      validation: (Rule) => Rule.required(),
      description: 'Text for the submit button',
    }),
    defineField({
      name: 'successMessage',
      title: 'Success Message',
      type: 'string',
      initialValue: 'Thank you! Your message has been sent successfully.',
      description: 'Message shown after successful form submission',
    }),
    defineField({
      name: 'errorMessage',
      title: 'Error Message',
      type: 'string',
      initialValue: 'Something went wrong. Please try again.',
      description: 'Message shown if form submission fails',
    }),
    defineField({
      name: 'requiredFields',
      title: 'Required Fields',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Name Required',
          type: 'boolean',
          initialValue: true,
        },
        {
          name: 'email',
          title: 'Email Required',
          type: 'boolean',
          initialValue: true,
        },
        {
          name: 'subject',
          title: 'Subject Required',
          type: 'boolean',
          initialValue: true,
        },
        {
          name: 'message',
          title: 'Message Required',
          type: 'boolean',
          initialValue: true,
        },
      ],
      description: 'Specify which fields are required',
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
              {title: 'Single Column', value: 'single'},
              {title: 'Two Column (Name/Email)', value: 'two-column'},
            ],
          },
          initialValue: 'single',
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
        title: title || 'Resend Contact Form',
        subtitle: 'Contact form with Resend integration',
        media: EnvelopeIcon,
      }
    },
  },
})