import { Request, Response, NextFunction } from 'express';
import { HttpRequest, HttpResponse } from '../../helpers/http';

export interface Middleware {
  handle: (httpRequest: HttpRequest) => Promise<HttpResponse>;
}

export const adaptMiddleware = (middleware: Middleware) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const httpRequest: HttpRequest = {
      headers: req.headers,
    };

    const httpResponse = await middleware.handle(httpRequest);

    if (httpResponse.statusCode === 200) {
      Object.assign(req, httpResponse.body);
      next();
    } else {
      res.status(httpResponse.statusCode).json({
        statusCode: httpResponse.statusCode,
        error: httpResponse.body.message,
        message: httpResponse.message?.message,
      });
    }
  };
};
