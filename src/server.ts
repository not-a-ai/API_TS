import *  as express from 'express';
import alunoRoute from './module/aluno/aluno.route';
const app = express();
app.use(express.json());

app.use('/aluno', alunoRoute);

app.listen(8080, () => {
  console.log('server running!');
});
