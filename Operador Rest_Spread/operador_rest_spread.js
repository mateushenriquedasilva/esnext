// spread com objeto
const funcionario = { nome: "Maria", salario: 12385.96 };
const clone = { ativo: true, ...funcionario };

console.log(clone);

// spread com array
const grupoA = ["Maria", "João", "Gloria"];
const grupoFinal = ["Pedro", "Rafaela", ...grupoA];

console.log(grupoFinal);