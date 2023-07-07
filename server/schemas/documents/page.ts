import { defineType, defineField } from "sanity"

export default defineType({
  name: "page",
  type: "document",
  title: "Page",
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Page Title"
    }),
    defineField({
      name: "sections",
      type: "array",
      title: "Add or Remove Sections",
      of: [
        { type: "hero" },
        { type: "faq" },
        { type: "content" },
        { type: "item", name: "note" },
        { type: "item", name: "callToAction"},
        { type: "itemList", name: "features"},
        { type: "itemList", name: "features2"},
      ]
    })
  ]
})
