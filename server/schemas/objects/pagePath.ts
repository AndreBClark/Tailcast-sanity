import { defineField, defineType } from "sanity";

const pagePath = defineType({
  title: 'Page Path',
  type: 'object',
  name: 'pagePath',
  fields: [
    {
      title: 'Pathname',
      name: 'pathname',
      type: 'string',
    },
    {
      title: 'No Index',
      name: 'noindex',
      type: 'boolean',
    },
    {
      title: 'Disabled',
      name: 'disabled',
      type: 'boolean',
    },
  ],
});

export const permaLink = {
  name: "permalink",
  type: "object",
  title: "the appearance of the links to blog posts",
  fields: [
    pagePath.fields[1],
    pagePath.fields[2],
    defineField({
      type: "string",
      name: "permalink",
      options: {
        list: [
          { value: "/%slug%", title: "only include post title `/post-title`" },
          { value: "/%year%-%month%-%day%-%slug%", title: "include date before the post title" },
          { value: "/%category%/%slug%", title: "include category before the post title" }
        ],
      },
      initialValue: "/%slug"
    })
  ]
}
export default pagePath;
