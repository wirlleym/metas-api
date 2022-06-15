const verificarDadosDeObjetivoMiddleware = (request, response, next) => {
  const { descricao, valor, atingido } = request.body;

  if (!descricao || !valor || !atingido) {
    return response.status(422).send('Dados incompletos');
  }

  next();
};

export default verificarDadosDeObjetivoMiddleware;
