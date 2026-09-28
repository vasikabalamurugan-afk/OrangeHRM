import { APIRequestContext } from '@playwright/test';

export class ReqResApi {
  protected request: APIRequestContext;
  constructor(request: APIRequestContext) {
    this.request = request;
  }
}