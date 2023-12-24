import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function PhoneDetailsPage(props) {
    const [phones, setPhones] = useState({});
    const { id } = useParams();

    const getOnePhone = () => {
        axios.get(`http://localhost:5005/phones/${id}`)
            .then((response) => {
                setPhones(response.data);
            })
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        getOnePhone();
    }, []);

    return (
        <>

            <Link to={"/phones"}>
                <h4>Back</h4>
            </Link>

            <div className="phone-details-container" key={phones.id}>
                {phones && (
                    <>
                        <img src={phones.imageFileName} />
                        <h2>{phones.manufacturer} {phones.name}</h2>
                        <h5>{phones.description}</h5>
                        <h5>{phones.price} EUR</h5>
                        <h5>{phones.screen} screen, {phones.color}</h5>
                        <h5>{phones.processor} processor, {phones.ram}gb of RAM</h5>
                    </>
                )}
            </div>

        </>
    )
}

export default PhoneDetailsPage;