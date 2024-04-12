import { Router } from "express";

const router = Router();

router.get('/teste', (_, res) => {
  res.send('Ola DEV!')
})

router.post('/teste', (req, res) => {
  res.status(200).json(req.headers)
})

export { router };