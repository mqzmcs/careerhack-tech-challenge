import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllPhonesPage() {
    const [phones, setPhones] = useState([]);

    const getAllPhones = () => {
        axios.get("http://localhost:5005/phones")
            .then((response) => {
                setPhones(response.data);
            })
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        getAllPhones();
    }, []);

    return (
        <>
            <h1>All Phones</h1>

            {phones.map((phone) => {

                return (
                    <div className="all-phones-container" key={phone.id}>
                        <Link to={`/phones/${phone.id}`}>
                            <img className="phone-image" src={phone.imageFileName} />
                            <h2>{phone.manufacturer} {phone.name}</h2>
                        </Link>
                    </div>
                )
            })};
        </>
    )
}

export default AllPhonesPage;