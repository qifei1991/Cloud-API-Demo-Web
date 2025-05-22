// Environment variable definition
// https://cn.vitejs.dev/guide/env-and-mode.html#env-files
/// <reference types="vite/client" />
interface ImportMetaEnv {
  VITE_APP_ENVIRONMENT: 'DEV' | 'STAG' | 'UAT' | 'PROD',
  // api gateway
  VITE_APP_API_BACKEND_URL: string,
  VITE_APP_API_WS_URL: string,
  // More environment variables...
  VITE_APP_PREFIX: string,
  VITE_APP_NAME: string,
  // Livestreaming
  VITE_LIVE_RTMP_URL: string,
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
