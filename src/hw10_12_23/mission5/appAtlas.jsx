import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AtlasInfo from './atlasInfo'
import AtlasInput from './atlasInput'

export default function AppAtlas() {
  const [infoItem,setInfoItem] = useState({});
  // let item = {}

  useEffect(() => {
    doApi("israel")
  },[])

  const doApi = async(_country) => {
    // ידאג להציג את הטעינה שוב למשתמש עד שהמדינה תטען
    setInfoItem({});
    let url = "https://restcountries.com/v3.1/name/"+_country;
    try{
      let resp = await axios.get(url);
      console.log(resp.data)
      setInfoItem(resp.data[0]);
    }
    catch(err){
      console.log(err);
      alert("There problem, come back later")
    }
  }

  const doApiCountryCode = async(_countryCode) => {
    // ידאג להציג את הטעינה שוב למשתמש עד שהמדינה תטען
    setInfoItem({});
    let url = "https://restcountries.com/v3.1/alpha/"+_countryCode;
    try{
      let resp = await axios.get(url);
      console.log(resp.data)
      setInfoItem(resp.data[0]);
    }
    catch(err){
      console.log(err);
      alert("There problem, come back later")
    }
  }

  return (
    <div className='container'>
      <h2>Atlas app</h2>
      <AtlasInput doApi={doApi} />
      <AtlasInfo item={infoItem} doApiCountryCode={doApiCountryCode} />
    </div>
  )
}
