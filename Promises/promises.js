// Promise é um objeto usado para processamento assíncrono. Um Promise (de "promessa") representa um valor que pode estar disponível agora, no futuro ou nunca.

const falarDepoisDe = (segundo, frase) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(frase);
    }, segundo * 1000);
  });
};

falarDepoisDe(3, "Que legal!")
  .then((frase) => frase.concat("?!?"))
  .then((outraFrase) => console.log(outraFrase))
  .catch((e) => console.log("error"));
