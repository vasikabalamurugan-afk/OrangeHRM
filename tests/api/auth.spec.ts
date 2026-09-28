import { test, expect } from '@playwright/test';
import { AuthAPI } from '../../api/auth.api';
import { authTestData } from '../../test-data/auth.data';

test.describe('ReqRes - Authentication API', () => {

  test('POST - Successful login', async ({ request }) => {

    const authAPI = new AuthAPI(request);
    const response = await authAPI.login(authTestData.validLogin.email,authTestData.validLogin.password);
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.token).toBeTruthy();
  });


  test('POST - Login without password', async ({ request }) => {
    const authAPI = new AuthAPI(request);
    const response = await authAPI.login(authTestData.invalidLogin.email,authTestData.invalidLogin.password);
    expect(response.status()).toBe(400);
    const body = await response.json();
    expect(body.error).toBeTruthy();
  });


  test('POST - Successful registration', async ({ request }) => {
    const authAPI = new AuthAPI(request);
    const response = await authAPI.register(authTestData.validRegistration.email,authTestData.validRegistration.password);
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.id).toBeTruthy();
    expect(body.token).toBeTruthy();
  });


  test('POST - Registration without password', async ({ request }) => {
    const authAPI = new AuthAPI(request);
    const response = await authAPI.register(authTestData.invalidRegistration.email,authTestData.invalidRegistration.password);
    expect(response.status()).toBe(400);
    const body = await response.json();
    expect(body.error).toBeTruthy();
  });

});