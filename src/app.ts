import Koa, { HttpError } from 'koa'
import bodyParser from 'koa-bodyparser'
import json from 'koa-json'


import router from './routers'
import { logger } from './config'
import { processError } from './utils/middle'

const app = new Koa()
app.use(json())
// app.use(accessLogKoa({
//   customHeaderKeys: [
//     RpcHeaders.COLLECTION_ID,
//     RpcHeaders.PERMISSION,
//     RpcHeaders.USER_ID,
//     'authorization'
//   ],
//   stdoutSimple: process.env.NODE_CONFIG_ENV === 'test'
// }))
// middlewares
app.use(bodyParser({
  enableTypes: ['json', 'form', 'text']
}))

// logger
app.use(async (ctx: Koa.BaseContext, next: Koa.Next) => {
  try {
    await next()
  } catch (err: any) {
    processError(err, ctx)
  }
})

// routers
app.use(router.routes())


// error-handling
app.on('error', (err) => {
  if (err instanceof HttpError) {
    // do nothing now
    if (err.statusCode >= 500) {
      logger.error('internal server error: %s', err)
      return
    }
  }
  logger.error('server error: %s', err)
})

export default app
