( ()=>{
    let formatData = (id: number, name: string, values: number[]): string => {
        return `${id} - ${name} - ${values.join(", ")}`;
    };
    
    console.log(formatData(1, "ABC", [10, 20, 30]));   
    console.log(formatData(2, "APPLE", [50, 20, 30]));
    console.log(formatData(3, "MANGO", [70, 90, 80]));
} )()
