import Router  from 'koa-router';

const home = new Router();

home.get('/', async ( ctx )=>{
    const html = `
    <h2>hello world</h2>
    `;
    ctx.body = html;
});
home.get('/timeout-error',async () => {
    setTimeout(() => {
        throw new Error('error in timeout');
    }, 0);
});
export default home;