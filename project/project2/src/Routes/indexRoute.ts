import express, { Express, Request, Response } from 'express';




const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Hello, this is Express + TypeScript (get)');
});

router.post('/', (req: Request, res: Response) => {
    res.send('Hello, this is Express + TypeScript (post)');
});

router.put('/', (req: Request, res: Response) => {
    res.send('Hello, this is Express + TypeScript (put)');
});

router.delete('/', (req: Request, res: Response) => {
    res.send('Hello, this is Express + TypeScript (delete)');
});

router.get('/:id', (req: Request, res: Response) => {
    res.send('Hello, this is Express + TypeScript (get by id)');
});

export default router;