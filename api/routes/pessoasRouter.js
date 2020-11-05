const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router.get('/pessoas', PessoaController.pegarTodasAsPessoas);
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa);
router.post('/pessoas', PessoaController.criaPessoa);
router.put('/pessoas/:id', PessoaController.atualizaPessoa);
router.delete('/pessoas/:id', PessoaController.deletaPessoa);
router.get('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.pegaUmaMatricula);
router.post('/pessoas/:estudanteId/matriculas', PessoaController.criaMatricula);
router.put('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.atualizandoUmaMatricula);
router.delete('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.deletaMatricula);

module.exports = router;