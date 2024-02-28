# CRUD de Alunos (TS) com Testes (Jest)

Este é um projeto backend em TypeScript que implementa um pequeno CRUD de alunos, permitindo criar, listarinformações de alunos. Além disso,
são fornecidos testes utilizando o framework Jest e o Supertest para garantir a robustez do código, e a cobertura de testes é verificada com um relatório HTML gerado automaticamente.

## Pré-requisitos

Certifique-se de ter o seguinte instalado em sua máquina:

- Node.js
- npm (gerenciador de pacotes do Node.js) ou Yarn
- TypeScript
- Jest
- MySQL (ou outro banco de dados compatível)
- `mysql2` e `knex`
- Supertest

## Instalação

1. Clone este repositório em sua máquina local:

2. Navegue até o diretório do projeto:

3. Instale as dependências do projeto com npm ou yarn:

## Configuração do Banco de Dados

Certifique-se de configurar as credenciais do banco de dados no arquivo `knexfile.ts` ou `knexfile.js`, e criar o banco de dados correspondente. Exemplo:
```typescript
        // knexfile.ts

module.exports = {
  client: 'mysql2',
  connection: {
    host: 'seu-host',
    user: 'seu-usuario',
    password: 'sua-senha',
    database: 'nome-do-banco-de-dados'
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
```
## Rotas

GET /alunos: Retorna a lista de todos os alunos.
POST /alunos: Cria um novo aluno.

## Testes
Para executar os testes, utilize o seguinte comando:

```Com npm:
  npm test
```
Isso iniciará a execução dos testes unitários e de integração, gerando um relatório de cobertura em HTML na pasta coverage após a conclusão dos testes.
![image](https://github.com/not-a-ai/API_TS/assets/123133377/6e0255f9-ccf3-48de-a393-535c45fbbf54)

## Ferramentas Utilizadas

Durante o desenvolvimento, foram utilizadas algumas ferramentas essenciais:

- **Insomnia:** Plataforma para teste e documentação de APIs, utilizado para entender e testar as rotas de envio de informações para o backend.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues, enviar pull requests ou sugerir melhorias para o projeto.
