import Item from './item';
import content from './content';
import datetimeFormatOptions  from "./dateFormatter";
import pagePath, { permaLink } from "./pagePath";
import Faq from "./faq"
import SectionTitle from './sectiontitle';
import Hero from './hero';
import ItemList from "./itemList";
import Note from './note';

const Objects: object[] = [
  datetimeFormatOptions,
  pagePath,
  permaLink,
  content,
  Item,
  ItemList,
  Hero,
  Faq,
  SectionTitle,
  Note
];
export default Objects;