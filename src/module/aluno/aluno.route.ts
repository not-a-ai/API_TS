import type { Request, Response } from 'express'
import * as express from 'express';
import alunoFatory from './aluno.fatory';
// import { ultimoValor } from '../'


export const router = express.Router();

router.get('/', async (_: Request, res: Response) => {
  const data = await alunoFatory.getAll();
  return res.status(200).json({ data });
});

router.post('/', async (req: Request, res: Response) => {
  const data = await alunoFatory.store(req.body);
  return res.status(201).json({ data });
});

// router.post('/ultimo-valor', async (req, res) => {
//   const response = ultimoValor(req.body);
//   return res.status(200).json(response);
// });


router.get('/teste', async (_, res) => {
  
  return res.status(200).json({msg: 'funcionou'});
});


export default router;
