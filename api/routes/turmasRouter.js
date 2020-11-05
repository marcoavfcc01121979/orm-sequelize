const { Router } = require('express');
const TurmasController = require('../controllers/TurmaController');

const router = Router();

router.get('/turmas', TurmasController.pegaTodasAsTurmas);
router.get('/turmas/:id', TurmasController.pegaUmaTurma);
router.post('/turmas', TurmasController.criaUmaTurmaNova);
router.put('/turmas/:id', TurmasController.atualizaTurmaNova);
router.delete('/turmas/:id', TurmasController.deletaUmaTurma);

module.exports = router;