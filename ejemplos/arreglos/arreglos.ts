(()=>{


const numeros = [1,2,3,4,5];

const otrosnumeros:number[]=[6,7,8,9,10];

//numeros.push('a');

numeros.push(100);
// numeros.push(true);
//

console.log(numeros);
console.log({numeros});


const nombre = ['Hugo','Paco','Luis'];

console.log(nombre[0]);
console.log(nombre[1]);
console.log(nombre[2]);

nombre.map( v => console.log(v.toUpperCase()) )

} )()
