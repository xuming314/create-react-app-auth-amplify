// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Thread, Blog } = initSchema(schema);

export {
  Thread,
  Blog
};