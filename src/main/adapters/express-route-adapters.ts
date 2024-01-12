// import { Controller, HttpRequest } from '@/presentation/protocols'
import { Request, Response } from 'express';
import { HttpRequest, HttpResponse } from '../../helpers/http';

interface Controller {
  (httpRequest: HttpRequest): Promise<HttpResponse>;
}

const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      params: req.params,
      query: req.query,
      headers: req.headers,
    };

    try {
      const httpResponse = await controller(httpRequest);
      res.status(httpResponse.statusCode).json(httpResponse.body);
    } catch (error) {
      res.status(error.statusCode).json({
        statusCode: error.statusCode,
        message: error.body.message,
      });
    }
  };
};

export default adaptRoute;
