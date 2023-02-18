import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const MaterialDetail = () => {
    const { id } = useParams();

    const [materialData, setMaterialData] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/materials/" + id).then((res) => {
            return res.json();
        }).then((resp) => {
            setMaterialData(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div>

            <div className="container">

                <div className="card row" style={{ "textAlign": "left" }}>
                    <div className="card-title">
                        <h2>Material Info</h2>
                    </div>
                    <div className="card-body"></div>

                    {materialData &&
                        <div>
                            <h2>Material Name : <b>{materialData.name}</b>  ({materialData.id})</h2>
                            <h3>Details</h3>
                            <h5>Color : {materialData.color}</h5>
                            <h5>Price (per m3) : {materialData.price}</h5>
                            <h5>Volume (m3) : {materialData.volume}</h5>
                            <h5>Date : {materialData.date}</h5>
                            <Link className="btn-back" to="/">Back to Listing</Link>
                        </div>
                    }
                </div>
            </div>
        </div >
    );
}

export default MaterialDetail;