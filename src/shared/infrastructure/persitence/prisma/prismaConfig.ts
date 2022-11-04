
const logs = [
  {
    emit: 'stdout',
    level: 'query',
  },
  {
    emit: 'stdout',
    level: 'error',
  },
  {
    emit: 'stdout',
    level: 'info',
  },
  {
    emit: 'stdout',
    level: 'warn',
  },
];

const loggerInfo: any = process.env.NODE_ENV === 'test' ? [] : logs;

export const prismaConfg = {
  datasources: {
    db: {
      url:
      //process.env.NODE_ENV === 'test' ? process.env.TEST_DATABASE_URL : process.env.DATABASE_URL,
      process.env.DATABASE_URL
    },
  },
  errorFormat: 'pretty',
  log: loggerInfo,
} as any;
