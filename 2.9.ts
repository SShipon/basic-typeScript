{
//Conditional Types 
 
type a1 = null
type b2 = string
 type x  = a1 extends null ? true :false //conditional type


type y =a1 extends null ? true : b2 extends undefined ? undefined :any


type richManDubai ={
    bike:string;
    car:string;
    ship:string;
}



}