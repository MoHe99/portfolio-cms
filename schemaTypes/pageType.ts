import {defineArrayMember, defineField, defineType} from 'sanity'

export const pageType = defineType({
  name: 'page',
  type: 'document',
  title: 'Page',
  groups: [
    {name: 'settings', title: 'Settings'},
    {name: 'content', title: 'Content'},
  ],
  fieldsets: [
    {name: 'general', title: 'General'},
    {name: 'appearance', title: 'Appearance'},
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required(),
      group: 'settings',
      fieldset: 'general',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      validation: (rule) => rule.required(),
      group: 'settings',
      fieldset: 'general',
    }),
    defineField({
      name: 'layout',
      type: 'string',
      title: 'Layout',
      initialValue: 'standard',
      options: {
        list: [
          {
            title: 'Standard Page',
            value: 'standard',
          },
          {
            title: 'Landing Page',
            value: 'landing',
          },
        ],
      },
      group: 'settings',
      fieldset: 'appearance',
    }),
    defineField({
      name: 'footer',
      type: 'boolean',
      title: 'Show in Footer Navigation',
      initialValue: false,
      group: 'settings',
      fieldset: 'appearance',
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      group: 'content',
      of: [
        defineArrayMember({
          name: 'heading',
          type: 'heading',
        }),
        defineArrayMember({
          name: 'paragraph',
          type: 'paragraph',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      columns: 'title',
    },
    prepare(selection) {
      const {columns} = selection
      return {
        title: columns,
      }
    },
  },
})
