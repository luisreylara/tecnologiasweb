export const imprimirObjeto = (argumento:any) =>{
    console.log(argumento);
}
export function funcionGenerica<T>(argumento:T):T{
    return argumento;
}

export const funcionGenericaFlecha=<T>(argumento:T) =>{
    return argumento;
}
export const funcionGenericaFlecha2=<T>(args:T) => args;

export const createPair=<S, T>(v1: S, v2: T): [S, T] =>  [v1, v2];
