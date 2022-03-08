// Um Map contém pares de chave-valor em que as chaves podem ser de qualquer tipo de dados.
// Um mapa lembra a ordem de inserção original das chaves.

const tecnologias = new Map();
tecnologias.set("react", { framework: false });
tecnologias.set("angular", { framework: true });

console.log(tecnologias.get("react").framework);

const chavesVariadas = new Map([
  [function () {}, "Função"],
  [{}, "Objeto"],
  [123, "Número"],
]);

chavesVariadas.forEach((vl, ch) => {
  console.log(ch, vl);
});

console.log(chavesVariadas.keys());

console.log(chavesVariadas.has(123));
chavesVariadas.delete(123);

const key = new Map();
key.set("key_1", "asdfasdfsdfas211654");
console.log(key.get("key_1"));
