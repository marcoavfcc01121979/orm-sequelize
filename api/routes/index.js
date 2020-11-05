const bodyParser = require('body-parser');
const pessoas = require('./pessoasRouter');
const turmas = require('./turmasRouter');
const niveis = require('./niveisRouter');

module.exports = app => {
  app.use(bodyParser.json());
  app.use(pessoas);
  app.use(turmas);
  app.use(niveis);
  app.get('/', (req, res) => res.send('Olá'));
}