
import { defineType, defineField  } from "sanity";

const itemList = defineType({
  type: 'object',
  name: 'itemList',
  title: 'Item List',
  fields: [
    defineField({
      type: 'sectionTitle',
      name: 'sectionTitle',
    }),
    defineField({
      name: 'items',
      type: 'array',
      title: 'Items',
      of: [{type: 'item'}],
    }),
  ],
})

export default itemList;