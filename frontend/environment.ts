import { loadEnv } from 'vite';

const { PUBLIC_SANITY_PROJECTID, PUBLIC_SANITY_DATASET, SANITY_WRITE_TOKEN } = loadEnv(
  import.meta.env.MODE,
  process.cwd(),
  ""
);

const sanityOptions ={
  projectId: PUBLIC_SANITY_PROJECTID,
  dataset: PUBLIC_SANITY_DATASET,
  token: SANITY_WRITE_TOKEN,
  apiVersion: "v2023-07-06",
  useCdn: false,
};

export default sanityOptions;
