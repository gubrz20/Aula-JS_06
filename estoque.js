const categorias = ['Eletronicos', 'Vestuario', 'Alimentos'];
console.log(categorias);

const codigosProdutos = [101, 102, 103, 104];
const fornecedores = new Array('TechSupply', 'ModaExpress', 'SuperFoods');
console.log(codigosProdutos);
console.log(fornecedores);

console.log(categorias[0]);
categorias[1] = 'Calçados';
console.log(categorias);

categorias.push('Livros');
categorias.pop();
categorias.unshift('Brinquedos');
categorias.shift();

console.log(categorias.length);

console.log(categorias.indexOf('Calçados'));
console.log(categorias.includes('Eletronicos'));

for (let i = 0; i < categorias.length; i++) {
  console.log(categorias[i]);
}

for (const categoria of categorias) {
  console.log(categoria);
}