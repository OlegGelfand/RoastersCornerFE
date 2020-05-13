import React, { useEffect, useState} from 'react';
import { getAllRoasters} from '../services/apiHelperRoasters'
import '../App.css';
import SideBars from './SideBars';
import Header from './Header';
import { Breakpoint} from "react-socks";

function Roasters() {
  
const [roasters, setRoasters] = useState([])
const [imageInput, setImageInput] = useState("");
  useEffect(() => {
    
    const makeAPICall = async () => {
      const resp =  await getAllRoasters()
      console.log('useEffect - resp', resp)
      setRoasters(resp)
    }
    makeAPICall()
  }, [])

  const renderRoasters = roasters.map((roaster, index) => {
    return (

      <li key={index}>
        Company Name:{roaster.companyName} Image:<img src={roaster.image}></img>
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
      
      {renderRoasters}
      
     
    </div>
  );
}

export default Roasters;