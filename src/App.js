import './App.css';
import Header from './Components/Header';
import CollectionCard from './Components/CollectionCard';
import { useState, useEffect } from 'react'
import axios from 'axios'
import PunkList from './Components/Punklist';
import Punklist from './Components/Punklist';

function App() {
  const [punkListData, setPunkListData] = useState([])
  
  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0xC4B41bAb353EE276570026d80f83f26E8f4E2630&order_direction=asc'
      )
      console.log(openseaData.data.assets)
      setPunkListData(openseaData.data.assets)
    }

    return getMyNfts()
  }, [])

  return (
    <div className='app'>
      <Header  /> 
      <Punklist punkListData={punkListData} />
    </div>
  ) 
}

export default App;
