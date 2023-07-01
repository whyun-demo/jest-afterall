import supertest from 'supertest';
import app from '../src/app';
import { destroy } from '../src/utils/log.middle';
const request = supertest(app.callback());
describe('home', () => {
    afterAll(async () => {
        jest.clearAllMocks();
        await destroy();
    });
    it('get home', async () => {
        const res = await request.get('/');
        expect(res.statusCode).toBe(200);
    });
    it('get error', async() => {
        const res = await request.get('/not-exist');
        expect(res.statusCode).toBe(200);
    });
});