import React, { useEffect, useState} from 'react';
import { getAllCoffees} from '../services/apiHelperRoasters'
import '../App.css';
import SideBars from './SideBars';
import Header from './Header';
import { Breakpoint} from "react-socks";

function Coffee() {
  
const [coffees, setCoffees] = useState([])
const [companyNameInput, setCompanyNameInput] = useState("");
  useEffect(() => {
    
    const makeAPICall = async () => {
      const resp =  await getAllCoffees()
      console.log('useEffect - resp', resp)
      setCoffees(resp)
    }
    makeAPICall()
  }, [])

  const renderCoffees = coffees.map((coffee, index) => {
    return (
      <li key={index}>
        Coffee Name:{coffee.companyName} Description:<img src={coffee.body}></img>
        
      </li>
    );
  });

  return (
    <div className="Roasters">
   <Header/>
   <Breakpoint medium up>
    <SideBars/>
      </Breakpoint>
      
 
      ROASTERS
      
      {renderCoffees}
      
     
    </div>
  );
}


export default Coffee;
