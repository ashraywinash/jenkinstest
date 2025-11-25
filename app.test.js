const app = require('./app');
const request = require('supertest');

let server;

beforeAll(() => {
  server = app.listen(4000); // any port
});

afterAll(() => {
  server.close();
});

test('GET / should return welcome message', async () => {
  const res = await request(server).get('/');
  expect(res.statusCode).toBe(200);
});
