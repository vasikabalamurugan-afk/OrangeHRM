import { APIRequestContext } from '@playwright/test';
import { ReqResApi } from './ReqResApi';

export class UsersAPI extends ReqResApi {

  constructor(request: APIRequestContext) {
    super(request);
  }

  async getUsers(page: number = 2) {
    const apiBaseUrl = process.env.API_BASE_URL || 'https://reqres.in/api';
    return await this.request.get(`${apiBaseUrl}/users?page=${page}`);
  }

  async getUser(userId: number) {
    const apiBaseUrl = process.env.API_BASE_URL || 'https://reqres.in/api';
    return await this.request.get(`${apiBaseUrl}/users/${userId}`);
  }

  async createUser(name: string, job: string) {
    const apiBaseUrl = process.env.API_BASE_URL || 'https://reqres.in/api';
    return await this.request.post('${apiBaseUrl}/users',
      {
        data: {
          name,
          job
        }
      }
    );
  }

  async updateUser(userId: number, name: string, job: string) {
    const apiBaseUrl = process.env.API_BASE_URL || 'https://reqres.in/api';
    return await this.request.put(`${apiBaseUrl}/users/${userId}`,
      {
        data: {
          name,
          job
        }
      }
    );
  }

  async patchUser(userId: number, job: string) {
    const apiBaseUrl = process.env.API_BASE_URL || 'https://reqres.in/api';
    return await this.request.patch(`${apiBaseUrl}/users/${userId}`,
      {
        data: {
          job
        }
      }
    );
  }

  async deleteUser(userId: number) {
    const apiBaseUrl = process.env.API_BASE_URL || 'https://reqres.in/api';
    return await this.request.delete(`${apiBaseUrl}/api/users/${userId}`);
  }
}