import ObjetivoServices from '../services/objetivo.services.js';

const objetivoServices = new ObjetivoServices();

class ObjetivoControllers {
  async listarTodos(request, response) {
    try {
      const objetivo = await objetivoServices.listarTodas();

      response.send(objetivo);
    } catch (error) {
      response.status(error.status).send(error.message);
    }
  }

  async listarUmObjetivoPorId(request, response) {
    const id = request.params.id;

    const objetivo = await objetivoServices.listarUmObjetivoPorId({ id });

    response.send(objetivo);
  }

  async criarNovoObjetivo(request, response) {
    const { descricao, valor, atingido } = request.body;

    try {
      const novoObjetivo = await objetivoServices.criarNovoObjetivo({
        descricao,
        valor,
        atingido,
      });

      response.status(201).send(novoObjetivo);
    } catch (error) {
      if (error.code === 11000) {
        response.status(400).send('Objetivo já cadastrado');
      }
    }
  }

  async atualizarObjetivo(request, response) {
    const { descricao, valor, atingido } = request.body;
    const id = request.params.id;

    try {
      const objetivoAtualizado = await objetivoServices.atualizarObjetivo({
        descricao,
        valor,
        atingido,
        id,
      });

      response.send(objetivoAtualizado);
    } catch (error) {
      if (error.code === 11000) {
        response.status(400).send('Objetivo já cadastrado');
      }
    }
  }

  async excluirObjetivo(request, response) {
    const id = request.params.id;

    const objetivo = await objetivoServices.excluirObjetivo({ id });

    response.status(200).send(objetivo);
  }
}

export default ObjetivoControllers;
