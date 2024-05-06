{
  //function with generics


 const createArray = (param:string):string[] =>{
    return[param]
 }

 const createArrayWithGeneric =<T> (param:T): T[] =>{
    return[param]
 }


const result = createArray("Hello Bangladesh")
const resultGeneric = createArrayWithGeneric<string>("bangladesh")

type User ={id:number; name:string}


const resultGenericObject = createArrayWithGeneric<User>({id:2525, name:"Shipon"})





const createArrayWithTuple =<T , Q> (param1:T, param2:Q) : [T,Q] =>{
    return[param1, param2]
 }


 const result10 = createArrayWithTuple<string, number>("Hello bd", 556)
const resultTuple = createArrayWithTuple<string, {name:string}>("bangladesh", {name:"aisa"})

const addCourseToStudent =<T> (student: T )=>{
    const course = "Next level web development"
    return{
        ...student,
        course
    }
} 


const student1 = addCourseToStudent({name:"shipon", email:'nxshipon@gmail.com', job:'next level developer'})


const student2 = addCourseToStudent({name:"shipon", email:'nxshipon@gmail.com', watch:'Apple watch'})



//

}