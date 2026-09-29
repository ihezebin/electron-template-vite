/// <reference types="vite/client" />

import type { TemplateAPI } from '../../shared/types'

declare global {
  interface Window {
    templateAPI: TemplateAPI
  }
}

export {}
