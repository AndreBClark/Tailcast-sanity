import { defineField, defineType } from "sanity";

export default defineType({
  name: 'item',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (StringRule) => StringRule.required()
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'icon',
      type: 'slug',
    }),
  ],
})
