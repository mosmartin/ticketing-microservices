import request from 'supertest';
import { app } from '../app';

describe('user sign in: POST /api/v1/users/signin', () => {
  it('should fail when an email does not exist is supplied', async () => {
    await request(app)
      .post('/api/v1/users/signin')
      .send({
        email: 'test@test.com',
        password: 'qwerty',
      })
      .expect(400);
  });

  it('fails when an in-correct password is supplied', async () => {
    await request(app)
      .post('/api/v1/users/signup')
      .send({
        email: 'test@test.com',
        password: 'qwerty',
      })
      .expect(201);

    await request(app)
      .post('/api/v1/users/signin')
      .send({
        email: 'test@test.com',
        password: 'sdfdsf',
      })
      .expect(400);
  });

  it('responds with a cookie when supplie with valid credentials', async () => {
    await request(app)
      .post('/api/v1/users/signup')
      .send({
        email: 'test@test.com',
        password: 'qwerty',
      })
      .expect(201);

    const res = await request(app)
      .post('/api/v1/users/signin')
      .send({
        email: 'test@test.com',
        password: 'qwerty',
      })
      .expect(200);

    expect(res.get('Set-Cookie')).toBeDefined();
  });
});
