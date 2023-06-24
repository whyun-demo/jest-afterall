import slogger, {LogLevel} from 'node-slogger'
export const logger = slogger.init({
  level: LogLevel.DEBUG
})