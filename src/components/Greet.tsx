
type GreetProps={
    name:string;
    age:number
    isLoggedIn:boolean
}
export const Greet=(props:GreetProps)=>{
    return (
        <div>
            {
                props.isLoggedIn?<h1>Hi {props.name} here, I am {props.age} years old</h1> : "Welcome Guest"
            }
        </div>
    )
}