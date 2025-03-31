import { type SchemaTypeDefinition } from 'sanity'
import projectSchema from '../schema/project-schema'
import skillsSchema from '../schema/skills-schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectSchema, skillsSchema],
}
