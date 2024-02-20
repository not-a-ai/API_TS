import knex from 'knex';
import knexConfig from '../config/knex';

let conn: any;

function conectar() {
  if (conn) {
    return conn;
  }

  conn = knex(knexConfig);
  return conn;
}

export default conectar();
