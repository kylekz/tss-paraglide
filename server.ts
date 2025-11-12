// import { paraglideMiddleware } from './src/i18n/server.js'
import handler, { ServerEntry } from '@tanstack/react-start/server-entry'
export default {
  fetch(req: Request) {
    return handler.fetch(req)
  },
} satisfies ServerEntry
