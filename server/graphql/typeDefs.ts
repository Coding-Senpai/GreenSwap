import path from 'path'
import { mergeTypeDefs } from '@graphql-tools/merge'
import { loadFilesSync } from '@graphql-tools/load-files'

const typesArray = loadFilesSync(path.join(__dirname, './types'), {
  recursive: true,
})

export default mergeTypeDefs(typesArray, { useSchemaDefinition: true })
