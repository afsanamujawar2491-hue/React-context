import CompC from "./CompC";
import { fname,lname } from "./App";
import { useContext } from "react";
const CompB=()=>
{
    const ufname=useContext(fname);
    const ulname=useContext(lname);
    return(
        <>
        <h1>This is from CompB</h1>
        <h1>User name is...{ufname} {ulname}</h1>
        </>
    )
}
export default CompB;