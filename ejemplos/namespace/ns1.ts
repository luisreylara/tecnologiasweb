namespace Validaciones {

     const ValidaTexto = (texto:string):boolean =>{
        return (texto.length>3)?true:false;
     } 

     const ValidaNumero = ( num:number):boolean =>{
        return (num>100 && num<200)?true:false;
     } 

     console.log(Validaciones.ValidaTexto('aa'));
     console.log(Validaciones.ValidaNumero(150));

}
