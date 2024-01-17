import { useEffect, useState } from "react";
import Item from "./Item";
import { getAllToys } from "./api/toyApi";


const ToysList = () => {

  
    let [arr, setArr] = useState([]);

    useEffect(() => {
        getAllToys().then(res => {
            setArr(res.data);
            console.log(res);
        })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (<>
      
        <h1>רשימת המשחקים הזמינים באתר</h1>
        <ul>
            {arr.map(item => <li key={item._id}><Item oneToy={item} /></li>)}
        </ul>
    </>);
}

export default ToysList;