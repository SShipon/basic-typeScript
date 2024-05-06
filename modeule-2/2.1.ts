{

    //Type Assertion / Type Narrowing 

     let anything : any;
     anything ="next level web development";
     anything =222;
     (anything as number)



     const kgToGm = (value:string | number) : string | number | undefined => {
        if(typeof value === "string"){
            const convertedValue = parseFloat(value)
            return `The converted value ${convertedValue}`;
        }
        if(typeof value === "number"){
            return value * 1000;
        }
        const result1 = kgToGm (101) as number
        console.log(result1)
        const result2 = kgToGm("1000")as string
        console.log(result2)
     }


     type CustomError = {
        message:string
     }

     try {

     }catch(error){
        console.log(error.message)
     }





























}
