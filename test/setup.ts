import Koa from 'koa';
jest.mock('../src/utils/log.middle', () => {
    return {
        init: jest.fn(),
        logMiddle: jest.fn( () => {
            return async(ctx: Koa.BaseContext, next: Koa.Next) => {
                await next();
            };
        }),
        destroy: jest.fn(),
    };
});
