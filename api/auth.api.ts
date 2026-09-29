import { APIRequestContext } from '@playwright/test';
import { ReqResApi } from './ReqResApi';

export class AuthAPI extends ReqResApi {

  constructor(request: APIRequestContext) {
    super(request);
  }

  async login(email: string, password: string) {
    const apiBaseUrl = process.env.API_BASE_URL || 'https://reqres.in/api';
    return await this.request.post(`${apiBaseUrl}/login`, {
        data: {
          email,
          password
        }
      }
    );
  }

  async register(email: string, password: string) {
    const apiBaseUrl = process.env.API_BASE_URL || 'https://reqres.in/api';
    return await this.request.post(`${apiBaseUrl}/register`, {
        data: {
          email,
          password
        }
      }
    );
  }
}