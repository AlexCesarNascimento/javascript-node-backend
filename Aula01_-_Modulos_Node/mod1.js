const nome = 'Alex';
const sobrenome = 'Cesar';
const falaNome = () => nome + ' ' + sobrenome;


// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;
// console.log(module);

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = 'O que eu quiser exportar';

console.log(exports);