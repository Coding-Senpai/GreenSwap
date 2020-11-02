import path from 'path'
import { loadFilesSync, mergeResolvers } from 'graphql-tools'
import customScalars from '~server/graphql/scalars'

const resolversArray = loadFilesSync(path.join(__dirname, './resolvers'))

export default mergeResolvers([customScalars, ...resolversArray])
