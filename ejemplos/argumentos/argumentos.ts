(()=>{
    

    function nombreCompleto2(nombre: any, ...argsmio:string[]) {
        return `${nombre} ${argsmio.join(' ')}`;
    }

    const alumno2 = nombreCompleto2('luis','rey','lara','gonzalez');

    console.log(alumno2);

    function sumar(...numeros: number[]): number {
        let suma = 0;
        for (const numero of numeros) {
          suma += numero;
        }
        return suma;
      }
      
      console.log(sumar(1, 2, 3));    // Output: 6
      console.log(sumar(10, 20, 30, 40)); // Output: 100
      console.log(sumar());              // Output: 0
      
})()
