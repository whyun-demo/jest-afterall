import { BaseContext, HttpError } from 'koa';
import { logger } from '../config';

export function processError(err: Error, ctx: BaseContext) {
    if (err instanceof HttpError) {
        ctx.status = err.statusCode || err.status || 500;
        ctx.body = {// 非 200 的错误，gateway 会重写 code 和 msg
            code: 99999,
            msg: err.message
        };
    } else {
        ctx.status = 500;
        ctx.body = {
            code: 88888,
            msg: err.message
        };
    }
    if (ctx.status >= 500) {
        logger.error('catch inner error', err);
    }
}