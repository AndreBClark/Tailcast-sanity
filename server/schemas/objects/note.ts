import { defineField, defineType } from "sanity";
import item from "./item";

const Note = defineType({
  name: "note",
  title: "Note Section",
  type: "object",
  fields: item.fields
})

export default Note;