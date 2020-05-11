import React, { useEffect, useState} from 'react';
import { getAllRoasters} from '../services/apiHelperRoasters'
import '../App.css';
import LeftNav from './LeftNav';
import RightNav from './RightNav';


function Roasters() {
  
const [roasters, setRoasters] = useState([])

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
        Company Name:{roaster.companyName}, 
        City: {roaster.body} {roaster.coffees} {roaster.memberDate},{roaster.numOrders}  
      </li>
    );
  });

  return (
    <div className="Roasters">
   
      <LeftNav/>
      <RightNav/>
      ROASTERS
      
      {renderRoasters}
      
     
    </div>
  );
}

export default Roasters;