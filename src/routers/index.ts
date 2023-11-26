import Router  from 'koa-router';

const home = new Router();

home.get('/', async ( ctx )=>{
    const html = `
    <h2>hello world</h2>
    `;
    ctx.body = html;
});
home.get('/timeout-error',async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(null);
        }, 0);
    });
});
export default home;