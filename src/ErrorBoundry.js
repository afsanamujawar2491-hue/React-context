import { Component } from "react";

class ErrorBoundry extends Component
{

    constructor(props)
    {
        super(props)
        {
            this.state={
                hasError:false
            }
        }
    }
    static getDerivedStateFromError()
    {
        return{hasError:true}
    }
    componentDidCatch(error,errorInfo)
    {
        console.log(error);
        console.log(errorInfo);
    }

    render(){
        if(this.state.hasError==true)
        {
            return (
                <>
                    <h3>value should not be less than zero</h3>
                </>
            )
            
        }
        return(
            <>
                <p>{this.props.children}</p>
            </>
        )
    }
}
export default ErrorBoundry;