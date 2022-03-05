//tagged template - processa o template dentro de uma funcão
function tag(partes, ...valores) {
  console.log(partes);
  console.log(valores);
  return "Outra String";
}

const aluno = "Gui";
const situacao = "Aprovado";
console.log(tag`${aluno} está ${situacao}`);

// return
// [ '', ' está ', '' ]
// [ 'Gui', 'Aprovado' ]
// Outra String