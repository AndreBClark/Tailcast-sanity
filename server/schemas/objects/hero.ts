import { defineType, defineField } from "sanity";
import SectionTitle from "./sectiontitle";

const Hero = defineType({
  name: "hero",
  type: "object",
  fields: [
    ...SectionTitle.fields,
    defineField({
      type: "item",
      name: "callToAction",
      title: "Primary Action Button"
    }),
    defineField({
      type: "item",
      name: "callToAction2",
      title: "Secondary Action Button"
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Add an Image"
    }),
  ]
})

export default Hero;