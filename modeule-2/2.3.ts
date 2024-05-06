{
    //Generics type

type GenericsArray<T> = Array<T>
// const rollNumbers : number[] =[6, 5, 6,]
const rollNumbers : GenericsArray<number> =[6, 5, 6,]

//const mentors:string[]=["Mir.x", "Mr.Y", "Mr.Z"]
const mentors:GenericsArray<string>=["Mir.x", "Mr.Y", "Mr.Z"]

const boolean :GenericsArray<boolean>=[true, false, true]

const user:GenericsArray<{name:string; age:number}> =[
    {
     name:'shipon',
     age:23,
    },
    {
        name:'Habib',
       age:22,
       },
      
]



const add =(x:number, y:number)=>x+y
add(54, 96)







//generic tuple

type GenericsTuple<X,Y> =[X,Y]

const man:GenericsTuple<string, string> =["Mr.Y", 'Mr. Y']


const UserWithID:GenericsTuple<number,{name:string, email:string}> = [1234, {name:'shipn', email:'nxshipon@gmail.com'}]















}



