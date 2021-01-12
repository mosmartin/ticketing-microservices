import request from 'supertest';
import { app } from '../app';

describe('user sign out: POST /api/v1/users/signout', () => {
  it('should clear the cookie after signing out', async () => {
    await request(app)
      .post('/api/v1/users/signup')
      .send({
        email: 'test@test.com',
        password: 'qwerty',
      })
      .expect(201);

    const res = await request(app)
      .post('/api/v1/users/signout')
      .send({})
      .expect(200);

    expect(res.get('Set-Cookie')[0]).toEqual(
      'express:sess=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; httponly'
    );
  });
});
