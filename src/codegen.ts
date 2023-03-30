import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://k8s-uhdregam-alb-9c0f3da497-731869144.ap-northeast-2.elb.amazonaws.com/graphql',
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
