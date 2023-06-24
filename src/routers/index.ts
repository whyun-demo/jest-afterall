import Router  from 'koa-router'

const home = new Router()

home.get('/', async ( ctx )=>{
  const html = `
    <h2>hello world</h2>
  `
  ctx.body = html
})

export default home