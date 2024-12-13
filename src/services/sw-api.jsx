import axios from "axios";
import React, {useEffect, useState} from 'react';

//Base Url from Star Wars APi
const URL = `https://swapi.dev/api/starships/`

export const GetAllStarships = function(){
        const [ship, setShip ] = useState([])

        useEffect(() => {
            const fetchData = async () => {
                const result = await fetch(URL);
                result.json().then( json => {
                    setShip(json.results);
                  //  console.log(json.results)
                })
            }
            fetchData();
        }, [])

    return(
        <>
        <div >

            <div >
                {ship.map(swShips => (
                    <div key={swShips.name} className='MyShips' >
                        <h2  className="card" >{swShips.name}</h2>
                    </div>
                ))}

            </div>

        </div>
        </>

    )
}
