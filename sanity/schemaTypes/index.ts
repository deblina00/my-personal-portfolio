import { type SchemaTypeDefinition } from 'sanity'
import projectSchema from '../schema/project-schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectSchema],
}
