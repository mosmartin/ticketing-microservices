import request from 'supertest';
import { app } from '../app';

describe('user sign up: POST /api/v1/users/signup', () => {
  it('returns a 201 status code on successful signup', async () => {
    return request(app)
      .post('/api/v1/users/signup')
      .send({
        email: 'test@test.com',
        password: 'qwerty',
      })
      .expect(201);
  });

  it('should return status code 400 with an invalid email', async () => {
    return request(app)
      .post('/api/v1/users/signup')
      .send({
        email: 'testtest.com',
        password: 'qwerty',
      })
      .expect(400);
  });

  it('should return status code 400 with an invalid password', async () => {
    return request(app)
      .post('/api/v1/users/signup')
      .send({
        email: 'test@test.com',
        password: 'qwe',
      })
      .expect(400);
  });

  it('should return status code 400 with missing email and password', async () => {
    await request(app)
      .post('/api/v1/users/signup')
      .send({
        email: 'test@test.com',
      })
      .expect(400);

    await request(app)
      .post('/api/v1/users/signup')
      .send({
        password: 'qwerty',
      })
      .expect(400);
  });

  it('disallows duplicate emails', async () => {
    await request(app)
      .post('/api/v1/users/signup')
      .send({
        email: 'test@test.com',
        password: 'qwerty',
      })
      .expect(201);

    await request(app)
      .post('/api/v1/users/signup')
      .send({
        email: 'test@test.com',
        password: 'qwerty',
      })
      .expect(400);
  });

  it('sets a cookie after successful signup', async () => {
    const res = await request(app)
      .post('/api/v1/users/signup')
      .send({
        email: 'test@test.com',
        password: 'qwerty',
      })
      .expect(201);

    expect(res.get('Set-Cookie')).toBeDefined();
  });
});
