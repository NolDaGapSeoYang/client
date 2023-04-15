/// <reference types="vite/client" />

declare namespace NodeJS {
  interface ProcessEnv {
    VITE_API_URL: string
  }
}

interface ImportMeta {
  env: {
    VITE_API_URL: string
    [key: string]: any
    BASE_URL: string
    MODE: string
    DEV: boolean
    PROD: boolean
    SSR: boolean
  }
}
