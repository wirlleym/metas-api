import Objetivo from '../models/objetivo.model.js';

class ObjetivoServices {
  async listarTodos() {
    const objetivo = await Objetivo.find();

    if (objetivo.length === 0) {
      throw { status: 404, message: 'Nenhuma objetivo encontrado' };
    }

    return objetivo;
  }

  async listarUmObjetivoPorId({ id }) {
    const objetivoSelecionado = await Objetivo.findById(id).exec();

    return objetivoSelecionado;
  }

  async criarNovaObjetivo({ descricao, valor, atingido }) {
    const novoObjetivo = {
      descricao,
      valor,
      atingido,
    };

    try {
      const objetivo = await Objetivo.create(novoObjetivo);

      return objetivo;
    } catch (error) {
      throw error;
    }
  }

  async atualizarObjetivo({ descricao, valor, atingido, id }) {
    const objetivoAtualizado = {
      descricao,
      valor,
      atingido,
    };

    try {
      await Objetivo.updateOne({ _id: id }, objetivoAtualizada);

      const objetivo = await Objetivo.findById(id);

      return objetivo;
    } catch (error) {
      throw error;
    }
  }

  async excluirObjetivo({ id }) {
    const objetivo = await Objetivo.findByIdAndDelete(id);

    return objetivo;
  }
}

export default ObjetivoServices;
