{

    //Constraints In Typescript

  

    
const createArrayWithTuple =<T , Q> (param1:T, param2:Q) : [T,Q] =>{
    return[param1, param2]
 }


 const result10 = createArrayWithTuple<string, number>("Hello bd", 556)
const resultTuple = createArrayWithTuple<string, {name:string}>("bangladesh", {name:"aisa"})

const addCourseToStudent =<T extends {id:number, email:string, name:string}> (student: T )=>{
    const course = "Next level web development"
    return{
        ...student,
        course
    }
} 


const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    job: string;}>


const student2 = addCourseToStudent({id:5,name:"shipon", email:'nxshipon@gmail.com', watch:'Apple watch'})

const student3 = addCourseToStudent({id:5,name:"shipon", email:'nxshipon@gmail.com', watch:'Apple watch' ,notStudent:'not student'})

















}