import { Aluno } from "../aluno.model";
import { KnexService } from "../../../service/knex";

describe('Unit - Aluno model Suite', () => {
  it('deve retornar valores do modelo', async () => {
    let knexServiceMock: any

    const knexMock = () => {
      return {
        select: jest.fn().mockReturnValueOnce([])
      }
    }

    knexServiceMock = {
      obterConexao: jest.fn(() => knexMock)
    }

    const aluno = new Aluno(knexServiceMock);
    const response = await aluno.getAll();
    expect(response).toBeTruthy();
    expect(response.length).toBe(0);
  })
  it('deve salvar um aluno no modelo', async () => {
    let knexServiceMock: any

    const knexMock = () => {
      return {
        insert: jest.fn().mockReturnValueOnce([100])
      }
    }

    knexServiceMock = {
      obterConexao: jest.fn(() => knexMock)
    }

    const aluno = new Aluno(knexServiceMock);
    const response = await aluno.store({
      'nome': 'Jão',
      'cpf': 123
    });
    expect(response).toBeTruthy();
    expect(response).toEqual([100]);
  })
});