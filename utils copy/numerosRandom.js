module.exports = function numerosRandom(cantidadDeNumeros){
  cantidadDeNumeros = Number(cantidadDeNumeros);
  let numbers = [];
  for (let i = 0; i <= cantidadDeNumeros; i++) {
    let num = Math.floor(Math.random() * (1000 - 0 + 1) + 0);
    numbers.push(num);
  }
  const result =  numbers.reduce((obj, cur) => {
    obj[cur] ? obj[cur]++ : (obj[cur] = 1);
    return obj;
  }, {});
  return result
}
