{
// Asynchronous Typescript promise

type Todo ={
  id:number;
  userId: number;
  title:string;
  completed:boolean
}

const getTodo  = async ():Promise<Todo> =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await res.json() 
    console.log(data)
   return data

}
getTodo()

// type something = {something:'something'}

// const createPromise =():Promise<something>=>{
//     return new Promise<something> ((resolve, reject)=>{
//         const data : something = {something:'something'}
//         if(data){
//             resolve(data)
//         }else{
//             reject("failed to load data")
//         }
//     })
// }

// const showData =  async ():Promise<something> =>{
//     const data: something = await createPromise ()
//     return data
// }

// showData()
















//


















}