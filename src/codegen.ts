import type { CodegenConfig } from '@graphql-codegen/cli'
import dotenv from 'dotenv'
dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [process.env.VITE_API_URL]: {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
        },
      },
    },
  ],
  documents: ['src/**/*.tsx', 'src/fragments.ts'],
  ignoreNoDocuments: true,
  generates: {
    './src/api/': {
      plugins: ['typescript', 'typescript-operations', 'typescript-apollo-client-helpers'],
      preset: 'client',
    },
  },
}

export default config
