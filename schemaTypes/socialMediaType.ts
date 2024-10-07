import {defineField, defineType} from 'sanity'

export const socialMediaType = defineType({
  name: 'socialMedia',
  title: 'Social Media',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'svgIcon',
      title: 'SVG Icon',
      type: 'inlineSvg',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'link',
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
