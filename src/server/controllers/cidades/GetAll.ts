import { Request, Response } from "express";
import * as yup from 'yup';
import { validation } from "../../shared/middleware";

interface IQueryProps {
  page?: number,
  limit?: number,
  filter?: string
};

export const getAllValidation = validation({
  query: yup.object().shape({
    page: yup.number().notRequired().moreThan(0),
    limit: yup.number().notRequired().moreThan(0),
    filter: yup.string().notRequired()
  })
})

export const getAll = async (req: Request<{}, {}, {}, IQueryProps>, res: Response) => {
  console.log('getAll')
  console.log(req.query)

  return res.status(404).send('Não implementado!');
}