import { useReducer } from "react";


const reducer=(state,action)=>
{
    if(action.type=='increment')
    {
        return {count:state.count+1}
    }
    else if(action.type=='decrement')
    {
        if(state.count>0)
        {
         return {count:state.count-1}
        }
         else{
                // return{count:"Value should not be less than zero"}
                return{count:-1}
            }
    }
    else
    {
        return{count:0}
    }
}



const MyApp=()=>
{
    const[state,dispatch]=useReducer(reducer,{count:0});


    if(state.count==-1)
    {
        throw new Error();
    }

    return(
        <>
            <div>
                <h3>Count:{state.count}</h3>
                <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
                <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
                <button onClick={()=>dispatch({type:'reset'})}>Reset</button>

            </div>
        </>
    )
}
export default MyApp;