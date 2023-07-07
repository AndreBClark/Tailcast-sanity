import { defineField, defineType } from "sanity"

const blog = {
  disabled: false,
  postsPerPage: 4,

  post: {
    permalink: '/%slug%',
    // Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
    noindex: false,
    disabled: false,
  },

  list: {
    pathname: 'blog',
    // Blog main path, you can change this to "articles" (/articles)
    noindex: false,
    disabled: false,
  },

  category: {
    pathname: 'category',
    // Category main path /category/some-category
    noindex: true,
    disabled: false,
  },

  tag: {
    pathname: 'tag',
    // Tag main path /tag/some-tag
    noindex: true,
    disabled: false,
  },
}


const Blog = defineType({
  type: "document",
  name: "blog",
  title: "Blog",
  fields: [
    {
      name: "disabled",
      type: "boolean",
    },
    {
      name: "postsPerPage",
      type: "number",
    },
    {
      name: "post",
      type: "permalink",
    },
    {
      name: "list",
      type: "pagePath"
    },
    {
      name: "category",
      type: "pagePath"
    },
    {
      name: "tag",
      type: "pagePath"
    }
  ],
  initialValue: blog
})

export default Blog;