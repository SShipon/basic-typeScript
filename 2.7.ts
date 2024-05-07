{

// generic constraint with keyof operator

type PoorMan ={
    bike:string;
    car:string;
    ship:string
}

type Owner = "bike" | "car" | "ship"  //manually


type Owner2 = keyof PoorMan

//const person1 : Owner2 ="bike"\

// const user ={
//     name:'Mr. shipon', 
//     age:26,
//     address:'Cumilla BD'
// }
// user["age"]


const  getPropertyValue =<X, Y extends keyof X>(obj: X, key:Y)=>{
    return obj[key]

}
const user ={
    name:'Mr. shipon', 
    age:26,
    address:'Cumilla BD'
}

const car ={
    model:'BMW 120', 
    year:'20 june 2024',
    address:'Cumilla BD'
}


const result1 = getPropertyValue(user, "name")
const result2 = getPropertyValue(car, "model")







}