// não aceita repetição/não indexada
const times = new Set();
times.add("Vasco");
times.add("São Paulo").add("Palmeiras").add("Corinthians");

times.has("Vasco");
times.delete("São Paulo");
console.log(times);

const nomes = ["Matheus", "Karol", "Karol"];
const nomes_ = new Set(nomes);

console.log(nomes_);
