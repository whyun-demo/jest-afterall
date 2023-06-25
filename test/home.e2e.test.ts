import supertest from 'supertest';
import app from '../src/app';
const request = supertest(app.callback());
describe('home', () => {
    it('get home', async () => {
        const res = await request.get('/');
        expect(res.statusCode).toBe(200);
    });
    it('get error', async() => {
        const res = await request.get('/not-exist');
        expect(res.statusCode).toBe(200);
    });
});