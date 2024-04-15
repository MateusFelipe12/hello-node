import { Router } from "express";
import { CidadesController } from "../controllers";


const router = Router();

router.get('/', (_, res) => {
  res.send('Ola DEV!');
});

router.post('/cidades', CidadesController.createValidation, CidadesController.create);

export { router };