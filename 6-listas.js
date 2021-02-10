console.log(`Trabalhando com listas`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rj = `Rio de Janeiro`;

const lista = new Array(`Salvador`,`São Paulo`,`Rio de Janeiro`);
lista.push(`Curitiba`); // Adicionando item


console.log("Destinos possíveis:");
console.log(lista);

lista.splice(2,1); //Removendo item 
console.log(lista);

console.log(lista[1]); //imprimindo apenas 1 item