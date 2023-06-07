import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`A request to api ${req.path} was made at ${new Date()}`);
    next();
  }
}

export { LoggerMiddleware };
