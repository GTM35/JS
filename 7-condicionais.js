console.log(`Trabalhando com listas`);

const lista = new Array(`Salvador`,`São Paulo`,`Rio de Janeiro`);
const idadeComprador = 18;

console.log("Destinos possíveis:");
console.log(lista);

if(idadeComprador >= 18){
    console.log("Comprador maior de idade");
    lista.splice(1,1); //Removendo item
}else{
    console.log("Não é maior de idade");
}

console.log(lista);