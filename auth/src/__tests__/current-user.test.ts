import request from 'supertest';
import { app } from '../app';

describe('get current signed in user: GET /api/v1/users/me', () => {
  it('should respond with the details of the current logged in user', async () => {
    const cookie = await global.signin();

    const res = await request(app)
      .get('/api/v1/users/me')
      .set('Cookie', cookie)
      .send()
      .expect(200);

    expect(res.body.currentUser.email).toEqual('test@test.com');
  });

  it('responds with null if user is not authenticated', async () => {
    const res = await request(app).get('/api/v1/users/me').send().expect(200);

    expect(res.body.currentUser).toEqual(null);
  });
});
