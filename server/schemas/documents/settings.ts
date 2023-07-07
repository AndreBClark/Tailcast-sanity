import { defineType, defineField } from 'sanity'

const CONFIG = {
  name: 'AstroWind',

  origin: new URL('https://astrowind.vercel.app'),
  basePathname: '/',
  trailingSlash: false,

  title: 'AstroWind — Free template for create a website with Astro + Tailwind CSS',
  description:
    '🚀 Suitable for Startups, Small Business, Sass Websites, Professional Portfolios, Marketing Websites, Landing Pages & Blogs.',
  defaultImage: {},

  defaultTheme: 'system', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"
  language: 'en',
  textDirection: 'ltr',

  dateFormatter: {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: '-07:00',
  },

  blog: {
    disabled: false,
    postsPerPage: 4,

    post: {
      permalink: '/%slug%', // Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
      noindex: false,
      disabled: false,
    },

    list: {
      pathname: 'blog', // Blog main path, you can change this to "articles" (/articles)
      noindex: false,
      disabled: false,
    },

    category: {
      pathname: 'category', // Category main path /category/some-category
      noindex: true,
      disabled: false,
    },

    tag: {
      pathname: 'tag', // Tag main path /tag/some-tag
      noindex: true,
      disabled: false,
    },
  },
}

export const settings = defineType({
  name: 'settings',
  type: 'document',
  title: 'Website Configuration',
  description: 'Configuration Settings for the website',
  groups: [
    { name: 'general', title: 'General', default: true },
    { name: 'locale', title: 'Language' },
    { name: 'blog', title: 'Blog Setup'},
    { name: 'google', title: 'Google' },
    { name: 'advanced', title: 'Advanced' },
  ],
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'The name of the website',
      validation: (Rule) => Rule.required(),
      group: 'general',
    }),
    defineField({
      name: 'origin',
      type: 'url',
      title: 'Origin',
      description: 'The origin URL of the website',
      validation: (Rule) => Rule.required(),
      group: ['advanced'],
    }),

    defineField({
      name: 'basePathname',
      type: 'string',
      title: 'Base Pathname',
      description: 'The base pathname of the website',
      group: ['advanced'],
    }),

    defineField({
      name: 'trailingSlash',
      type: 'boolean',
      title: 'Trailing Slash',
      description: 'Whether or not to use a trailing slash in URLs',
      group: ['advanced'],
    }),

    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The title of the website',
      validation: (Rule) => Rule.required(),
      group: 'general',
    }),

    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'The description of the website',
      group: 'general',
    }),

    defineField({
      name: 'defaultImage',
      type: 'image',
      title: 'Default Image',
      description: 'The default image for the website',
      validation: (Rule) => Rule.required(),
      group: ["blog"]
    }),

    defineField({
      name: 'defaultTheme',
      type: 'string',
      title: 'Default Theme',
      description: 'The default theme of the website',
      options: {
        list: [
          {title: 'System', value: 'system'},
          {title: 'Light', value: 'light'},
          {title: 'Dark', value: 'dark'},
          {title: 'Light Only', value: 'light:only'},
          {title: 'Dark Only', value: 'dark:only'},
        ],
      },
      group: ['advanced'],
    }),

    defineField({
      name: 'language',
      type: 'string',
      title: 'Language',
      description: 'The language of the website',
      validation: (Rule) => Rule.required(),
      group: 'locale',
    }),

    defineField({
      name: 'textDirection',
      type: 'string',
      title: 'Text Direction',
      description: 'The text direction of the website',
      options: {
        list: [
          {title: 'Left to Right', value: 'ltr'},
          {title: 'Right to Left', value: 'rtl'},
        ],
      },
      group: 'locale',
    }),

    defineField({
      name: 'dateFormatter',
      type: 'datetimeFormatOptions',
      title: 'Date Formatter',
      description: 'The date formatter of the website',
      group: ['locale', 'advanced'],
    }),
    defineField({
      type: 'blog',
      name: 'blog',
      title: 'Blog Settings',
      group: 'blog',
    }),

    defineField({
      name: 'googleAnalyticsId',
      type: 'string',
      title: 'Google Analytics ID',
      description: 'The Google Analytics ID of the website',
      group: 'google',
    }),

    defineField({
      name: 'googleSiteVerificationId',
      type: 'string',
      title: 'Google Site Verification ID',
      description: 'The Google Site Verification ID of the website',
      group: 'google',
    }),
  ],
  initialValue: CONFIG,
})

export default settings;