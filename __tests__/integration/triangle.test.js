import request from 'supertest';
import app from '../../src/App';

describe('Triangle', () => {
  it('Deve registrar um triangle', async () => {
    const response = await request(app)
      .post('/triangles')
      .send({ content: [[2], [2, 3], [4, 5, 7], [4, 3, 4, 3]] });

    expect(response.body).toHaveProperty('triangle');
  });

  it('Não deve registrar um triangle', async () => {
    const response = await request(app)
      .post('/triangles')
      .send({ content: 'sou uma Matriz' });

    expect(response.status).toBe(400);
  });
});
