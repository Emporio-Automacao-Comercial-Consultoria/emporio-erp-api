import { HttpResponse } from '../http';
import UnauthorizedError from './error';

export const badRequest = (message: Error): HttpResponse => ({
  statusCode: 400,
  message,
});

export const forbidden = (message: Error): HttpResponse => ({
  statusCode: 403,
  message,
});

export const unauthorized = (message: Error): HttpResponse => ({
  statusCode: 401,
  body: new UnauthorizedError(),
  message,
});

export const serverError = (message: Error): HttpResponse => ({
  statusCode: 500,
  message,
});

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data,
});

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  body: null,
});
