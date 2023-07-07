import { defineField, defineType } from "sanity"

export default defineType({
  name: 'content',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      type: 'text',
    }),
    defineField({
      name: 'highlight',
      type: 'text',
    }),
    defineField({
      type: 'array',
      name: 'items',
      of: [{type: "item"}],
    }),
    defineField({
      type: 'image',
      name: 'image',
    }),
    defineField({
      name: 'isReversed',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'isAfterContent',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})