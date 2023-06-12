import { LoggerMiddleware } from '../logger.middleware';

describe('LoggerMiddleware', () => {
  let loggerMiddleware: LoggerMiddleware;
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    loggerMiddleware = new LoggerMiddleware();
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should log the request information', () => {
    const req = { path: '/api/test' } as any;
    const date = new Date();
    const res = {} as any;
    const next = jest.fn();

    loggerMiddleware.use(req, res, next);

    expect(consoleSpy).toHaveBeenCalledWith(
      `A request to api ${req.path} was made at ${date}`,
    );
    expect(next).toHaveBeenCalled();
  });
});
