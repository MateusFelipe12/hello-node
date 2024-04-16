import { Request, Response } from "express";
import * as yup from 'yup';
import { validation } from "../../shared/middleware";

interface IParamProps {
  id?: number
};

interface ICidade {
  name: string
};

export const updateValidation = validation({
  params: yup.object().shape({
    id: yup.number().integer().required().moreThan(0)
  }),
  body: yup.object().shape({
    name: yup.string().required().min(3)
  })
})

export const update = async (req: Request<IParamProps, {}, ICidade>, res: Response) => {
  console.log('update')
  console.log(req.params)
   console.log(req.body)

  return res.status(404).send('Não implementado!');
}