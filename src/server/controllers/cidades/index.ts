import * as create from "./Create";
import * as getAll from "./GetAll";
import * as getById from "./GetById";
import * as update from "./Update"
import * as deletar from "./Delete"

export const CidadesController = {
  ...create,
  ...getAll,
  ...getById,
  ...update,
  ...deletar,
};