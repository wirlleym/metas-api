import { Router } from 'express';
import ObjetivoControllers from '../controllers/objetivo.controllers.js';
import verificarIdDeObjetivoMiddleware from '../middlewares/verificarIdDeObjetivo.middleware.js';
import verificarDadosDeObjetivoMiddleware from '../middlewares/verificarDadosDeObjetivo.middleware.js';

const objetivoRouter = Router();
const objetivoControllers = new ObjetivoControllers();

objetivoRouter.get('/listar-todos', objetivoControllers.listarTodos);
objetivoRouter.get(
  '/objetivo/:id',
  verificarIdDeObjetivoMiddleware,
  objetivoControllers.listarUmObjetivoPorId,
);
objetivoRouter.post(
  '/criar-objetivo',
  verificarDadosDeObjetivoMiddleware,
  objetivoControllers.criarNovoObjetivo,
);
objetivoRouter.put(
  '/atualizar-objetivo/:id',
  verificarIdDeObjetivoMiddleware,
  verificarDadosDeObjetivoMiddleware,
  objetivoControllers.atualizarObjetivo,
);
objetivoRouter.delete(
  '/excluir-objetivo/:id',
  verificarIdDeObjetivoMiddleware,
  objetivoControllers.excluirObjetivo,
);

export default objetivoRouter;
