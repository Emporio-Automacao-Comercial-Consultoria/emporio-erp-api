export type HttpResponse = {
  statusCode: number;
  message?: Error;
  body?: any;
};

export type HttpRequest = {
  body?: any;
  query?: any;
  params?: any;
  headers?: any;
};
