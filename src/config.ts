import { Kafka } from 'kafkajs';
import slogger, {LogLevel} from 'node-slogger';
export const logger = slogger.init({
    level: LogLevel.DEBUG
});
export const kafka = new Kafka({
    brokers: process.env.BROKERS?.split(',') as string[]
});
