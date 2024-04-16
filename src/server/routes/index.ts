import { Router } from "express";
import { CidadesController } from "../controllers";


const router = Router();

router.get('/', (_, res) => {
  res.send('Olá DEV!');
});

router.get('/cidades', CidadesController.getAllValidation, CidadesController.getAll);
router.get('/cidades/:id', CidadesController.getByIdValidation, CidadesController.getById);
router.post('/cidades/:id', CidadesController.updateValidation, CidadesController.update);
router.delete('/cidades/:id', CidadesController.deleteValidation, CidadesController.deletar);
router.post('/cidades', CidadesController.createValidation, CidadesController.create);

export { router };