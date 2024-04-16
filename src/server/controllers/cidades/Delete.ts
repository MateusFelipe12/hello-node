import { Request, Response } from "express";
import * as yup from 'yup';
import { validation } from "../../shared/middleware";

interface IParamProps {
  id?: number
};

export const deleteValidation = validation({
  params: yup.object().shape({
    id: yup.number().integer().required().moreThan(0)
  })
})

export const deletar = async (req: Request<IParamProps>, res: Response) => {
  console.log('delete')
   console.log(req.params)

  return res.status(404).send('Não implementado!');
}