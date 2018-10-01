import Winston from 'winston';

const logger = new Winston.Logger({
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    help: 3,
    data: 4,
    trace: 5,
    input: 6,
    prompt: 7,
    debug: 8,
    verbose: 9,
  },
  colors: {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    help: 'cyan',
    data: 'grey',
    trace: 'magenta',
    input: 'grey',
    prompt: 'grey',
    debug: 'blue',
    verbose: 'cyan',
  },
});

logger.add(Winston.transports.Console, {
  level: process.env.LOG_LEVEL || 'verbose',
  prettyPrint: true,
  colorize: true,
  silent: false,
  timestamp: true,
});

export default logger;
