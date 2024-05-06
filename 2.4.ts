{



// interface generic type

interface Developer<T, X = null>{
    name:string;
   computer:{
    brand:string;
    model:string;
    releaseYear:number
   }
   smartwatch: T
   bike?:X
}


type RolexWatch =  {
    brand:string;
    model:string;
    display:string;
}

const poorDevelope: Developer<RolexWatch> ={
    name:'shipon',
    computer:{
       brand:"Lenovo",
       model:'X-55UR6',
       releaseYear:2023
    },
    smartwatch:{
        brand:'Rolex',
        model:'kw66',
        display:'OLed'
    }
}

interface AppleWatch{
    brand:string;
    model:string;
    heartTrack:boolean;
    sleepTrack:boolean
}


interface YamahaBike {
    model:string;
    engineCapacity:string
}

const richDevelope: Developer<AppleWatch,YamahaBike> ={
    name:'Bristy',
    computer:{
       brand:"HP",
       model:'X-55UR662',
       releaseYear:2023
    },
    smartwatch:{
        brand:'Apple Watch',
        model:'something',
        heartTrack:true,
        sleepTrack:true
    },
    bike:{
       model:'YAMAHA ',
       engineCapacity:"1002250"
       
    }
     
}



















}