import { RequestHandler } from "express";
import  * as yup from "yup";

type TProperty = 'body' | 'header' | 'params' | 'query';

type TAllSchemas = Record<TProperty, yup.Schema<any>>;

type TValidation = (schemas: Partial<TAllSchemas>) => RequestHandler

export const validation: TValidation = (schemas) => async (req, res, next) => {
  const errorsResult: Record<string, Record<string, string>> = {};

  Object.entries(schemas).forEach(([key, schema])=> {
    try {
      schema.validateSync(req[key as TProperty], { abortEarly: false });
    } catch (error) {
      const yupError = error as yup.ValidationError;
      const errors:  Record<string, string> = {};
  
      yupError.inner.forEach( error => {
        if (!error.path) return;
        errors[error.path] = error.message;
      })

      errorsResult[key] = errors
    }
  })
  
  if ( Object.entries(errorsResult).length === 0){
    return next();
  } else {
    return res.status(400).json({
      status: 'error',
      errors: errorsResult
    });
  }


  
};