// const Cachorro = require('./B/C/D/mod')
// const c1 = new Cachorro('Snoop Dog')
// c1.latir()
const path = require('path')
const Cachorro = require('./Z/mod2')

const c1 = new Cachorro('Rex')
c1.latir()

console.log(__filename)         // nome do caminho do arquivo atual
console.log(__dirname)          // nome do diretorio atual
console.log(path.resolve(__dirname, '..', '..'))
