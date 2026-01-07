import { fname,lname } from "./App";
const CompC=()=>{
    return(
        <>
        <fname.Consumer>
            {(ufname)=>{
                return(
                <lname.Consumer>
                    {
                        (ulname)=>{
                             return  <h1>User Name is {ufname}{ulname}</h1>
                        }
                    }
                </lname.Consumer>)
               
            }}
        </fname.Consumer>
       
        </>
    )
}
export default CompC;