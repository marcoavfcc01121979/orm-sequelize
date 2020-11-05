const database = require('../models');

class TurmaController{
  static async pegaTodasAsTurmas(req, res) {
    try{
      const todasAsTurmas = await database.Turmas.findAll();
      return res.status(200).json(todasAsTurmas);
    } catch(error) {
      return res.status(500).json(error.message);
    }
  }
  static async pegaUmaTurma(req, res) {
    const { id } = req.params;
    try{
      const umaTurma = await database.Turmas.findOne({
        where: { id: Number(id) }
      })
      return res.status(200).json(umaTurma)
    }catch(error) {
      return res.status(500).json(error.message);
    }
  }
  static async criaUmaTurmaNova(req, res) {
    const umaTurmaNova = req.body;
    try{
      const novaTurma = await database.Turmas.create(umaTurmaNova);
      return res.status(200).json(novaTurma);
    }catch(error) {
      return res.status(500).json(error.message);
    }
  }
  static async atualizaTurmaNova(req, res) {
    const { id } = req.params;
    const novasTurmas = req.body;
    try{
      await database.Turmas.update(novasTurmas, { where: { id: Number(id) } });
      const atualizaTurma = await database.Turmas.findOne({ where: { id: Number(id) } });
      return res.status(200).json(atualizaTurma);
    } catch(error) {  
      return res.status(500).json(error.message);
    }
  }
  static async deletaUmaTurma(req, res) {
    const { id } = req.params;
    try {
      await database.Turmas.destroy({ where: { id: Number(id) } });
      return res.status(200).json(`A Turma de id:${id} foi excluida`);
    }catch(error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = TurmaController;