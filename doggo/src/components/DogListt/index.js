import { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
function DogListt() {
    const [dogList, setDogList] = useState([])
    axios.get(`https://dog.ceo/api/breeds/list`)
        .then(res => {
            const dogs = res.data.message
            // console.log(dogs)
            setDogList(dogs)
        })
    return (
        <div>
            {
                dogList
                    .map((dog, index) =>
                        <Link to={`/dog/${dog}`}>
                            <div key={index}>
                                <h3>{dog}</h3>
                            </div>
                        </Link>
                    )
            }
        </div>
    );
}

export default DogListt;