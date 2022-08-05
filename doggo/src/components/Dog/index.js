import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
function Dog(props) {
    const { slug } = useParams()
    const [dogImg, setDogImg] = useState([]);
    axios
        .get(`https://dog.ceo/api/breed/${slug}/images`)
        .then(res => {
            const dogs = res.data.message
            console.log(dogs);
            setDogImg(dogs)
        })
        .catch(err => console.log(err));
    return (
        <div>
            {dogImg.map((item, index) => (
                <img key={index}
                    src={item}
                    alt="dog-items"
                >
                </img>
            ))}
        </div>
    );
}

export default Dog;