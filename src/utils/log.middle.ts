import { Context, Next } from 'koa';
import { kafka } from '../config';
export const producer = kafka.producer();
let connectedPromise: Promise<void>;
const queue: unknown[] = [];
let timer: NodeJS.Timeout;
export function init() {
    connectedPromise = producer.connect();
    loop();
}
async function loop() {
    timer = setTimeout(async () => {
        await connectedPromise;
        const toSend = queue.splice(0).map((item) => {
            return {value: JSON.stringify(item)};
        });
        await producer.sendBatch({
            topicMessages: [{
                topic: 'access-log-demo',
                messages: toSend
            }]
        });
        loop();
    }, 200);
}
export function logMiddle() {
    init();
    return async (ctx: Context, next: Next) => {
        await next();
        const req = ctx.request;
        const res = ctx.response;
        const data = {
            query: req.query,
            body: req.body,
            path: req.url,
            status: res.status,
            user_agent: req.get('user-agent'),
            req_length: req.get('content-type')
        };
        // await connectedPromise;
        queue.push(data);
    };
}

export async function destroy() {
    if (timer) {
        clearTimeout(timer);
    }
    await producer.disconnect().catch(() => 0);
}