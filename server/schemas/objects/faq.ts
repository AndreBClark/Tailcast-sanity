import { defineType, defineField, defineArrayMember } from "sanity";

const Faq = defineType({
  name: "faq",
  type: "object",
  title: "Frequently Asked Questions",
  fields: [
    defineField({
      type: "sectionTitle",
      name: "sectionTitle"
    }),
    defineField({
      type: "array",
      name: "questions",
      title: "Questions & Answers",
      of: [
        defineArrayMember({
          type: "object",
          name: "qa",
          fields: [
            defineField({
              type: "string",
              name: "question",
              title: "Question",
              validation: Rule => Rule.required()
            }),
            defineField({
              name: "answer",
              title: "Answer",
              type: "text",
              rows: 3
            })
          ]
      })]
    })
  ]
})

export default Faq;