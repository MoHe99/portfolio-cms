import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {deskStructure} from './desk/structure'
import {inlineSvgInput} from '@focus-reactive/sanity-plugin-inline-svg-input'
import {linkField} from 'sanity-plugin-link-field'

export default defineConfig({
  name: 'default',
  title: 'portfolio-cms',

  projectId: process.env.SANITY_STUDIO_SANITY_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_SANITY_DATASET!,

  plugins: [
    structureTool({
      structure: deskStructure,
    }),
    inlineSvgInput(),
    visionTool(),
    linkField(),
  ],

  schema: {
    types: schemaTypes,
  },
})
