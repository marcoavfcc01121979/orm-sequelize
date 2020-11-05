const database = require('../models');

class NivelController {
  static async pegaTodosOsNiveis(req, res) {
    try {
      const todosOsNiveis = await database.Niveis.findAll();
      return res.status(200).json(todosOsNiveis);
    } catch(error) {
      return res.status(500).json(error.message);
    } 
  }
  static async pegaUmaNivel(req, res) {
    const { id } = req.params;
    try {
      const umNivel = await database.Niveis.findOne({ where: { id: Number(id) } });
      return res.status(200).json(umNivel);
    }catch(error) {
      return res.status(500).json(error.message); 
    }
  }
  static async criaUmNivel(req, res) {
    const umNovoNivel = req.body;
    try {
      const novoNivel = await database.Niveis.create(umNovoNivel);
      return res.status(200).json(novoNivel);
    }catch(error) {
      return res.status(500).json(error.message);
    }
  }
  static async atualizaUmNivel(req, res) {
    const { id } = req.params;
    const novosNiveis = req.body;
    try{
      await database.Niveis.update(novosNiveis, { where: { id: Number(id) } })
      const nivelAtualizado = await database.Niveis.findOne({ where: { id: Number(id) } });
      return res.status(200).json(nivelAtualizado);
    }catch(error){
      return res.status(500).json(error.message);
    }
  }
  static async deletaUmNivel(req, res) {
    const { id } = req.params;
    try{
      await database.Niveis.destroy({ where: { id: Number(id) } })
      return res.status(200).json(`O Nivel de id: ${id} foi excluido.`);
    }catch(error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = NivelController;