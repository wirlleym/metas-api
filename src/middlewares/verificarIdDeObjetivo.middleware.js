import Objetivo from '../models/objetivo.model.js';
import mongoose from 'mongoose';

const verificarIdDeObjetivoMiddleware = async (request, response, next) => {
  const id = request.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return response.status(400).send({ message: 'ID inválido!' });
  }

  const objetivo = await Objetivo.findById(id);

  if (!objetivo) {
    return response.status(404).send('Objetivo não encontrado!');
  }

  next();
};

export default verificarIdDeObjetivoMiddleware;
