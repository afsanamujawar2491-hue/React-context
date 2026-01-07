import logo from './logo.svg';
import './App.css';
import CompA from "./CompA";
import { createContext } from 'react';
import CompC from './CompC';
import CompB from './CompB';

 const fname=createContext();// crteate a context From where to pass values
 const lname=createContext();
function App() {
 

 
  return (
    <>
 {/* <CompA/> */}

    <fname.Provider value={'Afsana'}>
    <lname.Provider value={"Mujawar"}>
    <CompA />
    </lname.Provider>
    
    </fname.Provider>
    </>
       
  
  );
}

export default App;
export {fname,lname};