const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router.get('/pessoas', PessoaController.pegaPessoasAtivas);
router.get('/pessoas/todos', PessoaController.pegarTodasAsPessoas);
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa);
router.get('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.pegaUmaMatricula);
router.get('/pessoas/:estudanteId/matricula', PessoaController.pegaMatricula);
router.get('/pessoas/matriculas/:turmaId/confirmadas', PessoaController.pegaMatriculasPorTurma);
router.post('/pessoas', PessoaController.criaPessoa);
router.post('/pessoas/:estudanteId/matriculas', PessoaController.criaMatricula);
router.post('/pessoas/:id/restaurar', PessoaController.restaurarPessoa);
router.put('/pessoas/:id', PessoaController.atualizaPessoa);
router.put('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.atualizandoUmaMatricula);
router.delete('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.deletaMatricula);
router.delete('/pessoas/:id', PessoaController.deletaPessoa);





module.exports = router;