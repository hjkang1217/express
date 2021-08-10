import request from 'supertest';
import app from './index';

describe('TEST', () => {
  test('GET /', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });
  test('POST /user', async () => {
    const res = await request(app).post('/user').send({ name: 'aaa', email: 'aaa@naver.com' });
    expect(res.statusCode).toBe(200);
  });
});