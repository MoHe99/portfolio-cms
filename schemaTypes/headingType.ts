import {defineArrayMember, defineField, defineType} from 'sanity'

export const headingType = defineType({
  name: 'heading',
  title: 'Heading',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
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
