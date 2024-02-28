import * as request from 'supertest';

describe('Int - Aluno suite', () => {

  it('##GET /aluno', async () => {
    const response = await request('http://localhost:8080')
      .get('/aluno')

    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
    
  })
  it('##POST /aluno', async () => {
    const response = await request('http://localhost:8080')
      .post('/aluno')
      .send({
        nome: 'Aluno test',
        cpf: 123
      })

    expect(response.statusCode).toBe(201);
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.body.data).toHaveLength(1);
  })
})