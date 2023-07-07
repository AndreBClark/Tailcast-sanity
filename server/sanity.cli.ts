import {defineCliConfig} from 'sanity/cli';
import sanityOptions from './environment';

export default defineCliConfig({

  api: sanityOptions
})
