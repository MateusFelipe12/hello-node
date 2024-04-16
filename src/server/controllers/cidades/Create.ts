import { Request, Response } from "express";
import * as yup from 'yup';
import { validation } from "../../shared/middleware";

interface ICidade {
  name: string
};

export const createValidation = validation({
  body: yup.object().shape({
    name: yup.string().required().min(3)
  })
})

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
  console.log('create')
  console.log(req.body)
   

  return res.status(404).send('Não implementado!');
}