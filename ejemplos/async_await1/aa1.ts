const url1:string="https://jsonplaceholder.typicode.com/photos";
const url2:string="https://jsonplaceholder.typicode.com/comments";

const consultarApiA = async ()=>{
    const ini1 = performance.now();

    const res1 = await fetch(url1);
    const resul1 = await res1.json();
    console.log(resul1);

    const res2 = await fetch(url2);
    const resul2 = await res2.json();
    console.log(resul2);
    const fin1= performance.now();
    console.log(`Resultado funcion A : ${fin1-ini1} ms`);

}
const consultarApiB = async ()=>{
  const inicio = performance.now();
    const [respuesta1,respuesta2] = await Promise.all([fetch(url1),fetch(url2)]);
    
    const resultado1 = await respuesta1.json();
    const resultado2= await respuesta2.json();

    const fin = performance.now();
    console.log(`Resultado funcion B: ${fin-inicio} ms`)
}
consultarApiA();
consultarApiB();
