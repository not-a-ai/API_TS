import type { Request, Response } from 'express'
import * as express from 'express';
import alunoFatory from './aluno.fatory';


export const router = express.Router();

router.get('/', async (_: Request, res: Response) => {
  const data = await alunoFatory.getAll();
  return res.status(200).json({ data });
});

router.post('/', async (req: Request, res: Response) => {
  const data = await alunoFatory.store(req.body);
  return res.status(200).json({ data });
});

export default router;
