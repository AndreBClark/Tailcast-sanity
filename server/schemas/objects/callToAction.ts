import { defineType } from "sanity";
import Item from "./item"

export const CallToAction = defineType({
  name: 'callToAction',
  type: 'object',
  title: "Call to Action",
  fields: Item.fields,
})