import { schemaTypes } from './schemas/index';
import {
  defineConfig,
  isDev
} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import { media } from 'sanity-plugin-media';
import {schemaTypes} from './schemas'
// import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'
import {unsplashImageAsset} from 'sanity-plugin-asset-source-unsplash'
import sanityOptions from './environment'

const devOnlyPlugins = [
//   getStartedPlugin(),
  visionTool({
    defaultApiVersion: sanityOptions.apiVersion,
    defaultDataset: sanityOptions.dataset
  })
];
// Define the actions that should be available for singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore", "delete"])

// Define the singleton document types
const singletonTypes = new Set(["settings"]);

const structure = {
  structure: (S) =>
    S.list()
      .title('Content')
      .items([
        S.listItem()
          .title('Settings')
          .id('settings')
          .child(S.document().schemaType('settings').documentId('settings')),
        ...S.documentTypeListItems().filter(
          (listItem: { [key: string]: any}) => ['page'].includes(listItem.getId())
        ),
      ]),
}


export default defineConfig({
  name: "default",
  ...sanityOptions,
  plugins: [
    deskTool(structure),
    media(),
    ...(isDev ? devOnlyPlugins : [])
  ],
  schema: schemaTypes,
    // templates: (templates) => templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    // actions: (input, context) =>
      // singletonTypes.has(context.schemaType)
        // ? input.filter(({action}) => action && singletonActions.has(action))
        // : input,
  },
})
