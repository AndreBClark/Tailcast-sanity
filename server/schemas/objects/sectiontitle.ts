import { defineType, defineField } from "sanity";

const SectionTitle = defineType({
  name: "sectionTitle",
  type: "object",
  title: "Section Titles",
  fields: [
    defineField({
      name: "title",
      title: "Section Title",
      type: "string",
      validation: Rule => Rule.required()
    }),
    defineField({
      name: "highlight",
      type: "string",
      title: "Highlight"
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      rows: 2
    }),
  ]
})

export default SectionTitle;