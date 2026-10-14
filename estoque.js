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

const produtos = [
  { nome: 'Teclado Mecânico', preco: 250.00, estoque: 15 },
  { nome: 'Mouse Gamer', preco: 120.00, estoque: 8 },
  { nome: 'Monitor Ultrawide', preco: 1200.00, estoque: 4 }
];

console.log(produtos[0].nome);

const produtosBaratos = produtos.filter(produto => produto.preco < 300.00);
console.log(produtosBaratos);

const precos = [50, 150, 200, 350, 400];
const multiplosDe100 = precos.filter(preco => preco % 100 === 0);
console.log(multiplosDe100);

const quantidades = [2, 3, 5, 10];
const totalItens = quantidades.reduce((acc, item) => acc + item, 0);
console.log(totalItens);

const valorTotalEstoque = produtos.reduce((acc, produto) => acc + (produto.preco * produto.estoque), 0);
console.log(valorTotalEstoque);

const precosOriginais = [100, 200, 300];
const precosComDesconto = precosOriginais.map(preco => preco * 0.9);
console.log(precosComDesconto);

const nomesProdutos = produtos.map(produto => produto.nome);
console.log(nomesProdutos);

const produtosOrdenados = produtos.slice().sort((a, b) => a.preco - b.preco);
console.log(produtosOrdenados);

console.log(produtos.some(produto => produto.estoque < 5));

const inventarioNovo = [
  { nome: 'Teclado', estoque: 15 },
  { nome: 'Mouse', estoque: 2 },
  { nome: 'Headset', estoque: 10 }
];

console.log(inventarioNovo.some(produto => produto.estoque < 5));
console.log(inventarioNovo.find(produto => produto.estoque < 5));