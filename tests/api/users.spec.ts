import { test, expect } from '@playwright/test';
import { UsersAPI } from '../../api/users.api';
import { usersTestData } from '../../test-data/users.data';

test.describe('ReqRes - Users API', () => {

  test('GET - List users', async ({ request }) => {
    const usersAPI = new UsersAPI(request);
    const response = await usersAPI.getUsers(usersTestData.listUsers.page);
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.page).toBe(usersTestData.listUsers.page);
    expect(body.data).toBeDefined();
    expect(body.data.length).toBeGreaterThan(0);
  });

  test('GET - Get single user', async ({ request }) => {
    const usersAPI = new UsersAPI(request);
    const response = await usersAPI.getUser(usersTestData.validUser.id);
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.data.id).toBe(usersTestData.validUser.id);
    expect(body.data.email).toBeTruthy();
    expect(body.data.first_name).toBeTruthy();
    expect(body.data.last_name).toBeTruthy();
  });


  test('GET - Get invalid user', async ({ request }) => {
    const usersAPI = new UsersAPI(request);
    const response = await usersAPI.getUser(usersTestData.invalidUser.id);
    expect(response.status()).toBe(404);
  });


  test('POST - Create user', async ({ request }) => {
    const usersAPI = new UsersAPI(request);
    const response = await usersAPI.createUser(usersTestData.createUser.name,usersTestData.createUser.job);
    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body.name).toBe(usersTestData.createUser.name);
    expect(body.job).toBe(usersTestData.createUser.job);
    expect(body.id).toBeTruthy();
    expect(body.createdAt).toBeTruthy();
  });


  test('PUT - Update user', async ({ request }) => {
    const usersAPI = new UsersAPI(request);
    const response = await usersAPI.updateUser(usersTestData.updateUser.id,usersTestData.updateUser.name,usersTestData.updateUser.job);
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.name).toBe(usersTestData.updateUser.name);
    expect(body.job).toBe(usersTestData.updateUser.job);
    expect(body.updatedAt).toBeTruthy();
  });


  test('PATCH - Update user', async ({ request }) => {
    const usersAPI = new UsersAPI(request);
    const response = await usersAPI.patchUser(usersTestData.patchUser.id,usersTestData.patchUser.job);
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.job).toBe(usersTestData.patchUser.job);
    expect(body.updatedAt).toBeTruthy();
  });


  test('DELETE - Delete user', async ({ request }) => {
    const usersAPI = new UsersAPI(request);
    const response = await usersAPI.deleteUser(usersTestData.validUser.id);
    expect(response.status()).toBe(204);
  });

});