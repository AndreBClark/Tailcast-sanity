import { defineType } from 'sanity'

const timeZones = [
  { title: 'Eastern Time (GMT-4)', value: '-04:00' },
  { name: 'americaChicago', title: 'Central Time (GMT-5)', value: '-05:00' },
  { name: 'americaDenver', title: 'Mountain Time (GMT-6)', value: '-06:00' },
  { name: 'americaLosAngeles', title: 'Pacific Time (GMT-7)', value: '-07:00' },
  { name: 'europeLondon', title: 'GMT (GMT+0)', value: '+00:00' },
  { name: 'europeParis', title: 'Central European Time (GMT+2)', value: '+02:00' },
  { name: 'europeBerlin', title: 'Central European Time (GMT+2)', value: '+02:00' },
  { name: 'europeMadrid', title: 'Central European Time (GMT+2)', value: '+02:00' },
  { name: 'europeRome', title: 'Central European Time (GMT+2)', value: '+02:00' },
  { name: 'europeAthens', title: 'Eastern European Time (GMT+3)', value: '+03:00' },
]

const datetimeFormatOptions = defineType({
  name: 'datetimeFormatOptions',
  title: 'Datetime Options',
  type: 'document',
  initialValue: {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: '-07:00',
  },
  fields: [
    {
      name: 'year',
      title: 'Year',
      type: 'string',
      options: {
        list: [
          { name: 'numeric', title: 'Numeric', value: 'numeric' },
          { name: '2-digit', title: '2-digit', value: '2-digit' },
        ],
      },
    },
    {
      name: 'month',
      title: 'Month',
      type: 'string',
      options: {
        list: [
          { name: 'numeric', title: 'Numeric', value: 'numeric' },
          { name: '2-digit', title: '2-digit', value: '2-digit' },
          { name: 'narrow', title: 'Narrow', value: 'narrow' },
          { name: 'short', title: 'Short', value: 'short' },
          { name: 'long', title: 'Long', value: 'long' },
        ],
      },
    },
    {
      name: 'day',
      title: 'Day',
      type: 'string',
      options: {
        list: [
          { name: 'numeric', title: 'Numeric', value: 'numeric' },
          { name: '2-digit', title: '2-digit', value: '2-digit' },
        ],
      },
    },
    {
      name: 'timeZone',
      title: 'Timezone',
      type: 'string',
      options: {
        list: timeZones
      },
    },
  ],
})

export default datetimeFormatOptions
