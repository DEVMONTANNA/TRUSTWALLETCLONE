import React, { useState } from 'react'

const Learening = () => {
    const [data, setData] = useState();
    async function fetchData(){
        try {
            const res = await fetch ("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
             if(!res.ok){
                console.log("Error fetching data")
            }
            const convert_to_json = await res.json()
            setData(convert_to_json)
        } catch (error) {
            
        }
    }
  return (
    <div>Learening
        <button onClick={fetchData}></button>
        <p>
            {data}
        </p>
    </div>
  )
}

export default Learening