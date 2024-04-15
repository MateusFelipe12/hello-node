import { Request, RequestHandler, Response } from "express";
import * as yup from 'yup';
import { validation } from "../../shared/middleware";

interface ICidade {
  name: string,
  state: string,
};

export const createValidation = validation({
  body: yup.object().shape({
    name: yup.string().required().min(3),
    state: yup.string().required().min(3)
  }),
  query: yup.object().shape({
    filter: yup.string().required().min(3)
    // limit: yup.string().required().min(1)
  }),
})

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
   

  return res.send('Create!');
}