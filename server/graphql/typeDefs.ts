import path from 'path'
import { mergeTypeDefs } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';
import { DIRECTIVES } from '@graphql-codegen/typescript-mongodb';

const typesArray = loadFilesSync(path.join(__dirname, './types'), {
  recursive: true,
})
typesArray.push(DIRECTIVES);

export default mergeTypeDefs(typesArray, { useSchemaDefinition: true});
