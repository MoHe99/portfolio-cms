import {defineField, defineType} from 'sanity'

export const paragraphType = defineType({
  name: 'paragraph',
  title: 'Paragraph',
  type: 'document',
  fieldsets: [
    {name: 'title', title: 'Title'},
    {name: 'text', title: 'Text'},
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required(),
      fieldset: 'title',
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      initialValue: 'h1',
      validation: (rule) => rule.required(),
      options: {
        list: [
          {title: 'Heading 1', value: 'h1'},
          {title: 'Heading 2', value: 'h2'},
          {title: 'Heading 3', value: 'h3'},
          {title: 'Heading 4', value: 'h4'},
          {title: 'Heading 5', value: 'h5'},
          {title: 'Heading 6', value: 'h6'},
        ],
      },
      fieldset: 'title',
    }),
    defineField({
      name: 'showTitle',
      type: 'boolean',
      initialValue: true,
      title: 'Show Title',
      validation: (rule) => rule.required(),
      fieldset: 'title',
    }),
    defineField({
      name: 'text',
      type: 'array',
      of: [{type: 'block'}],
      title: 'Text',
      validation: (rule) => rule.required(),
      fieldset: 'text',
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
