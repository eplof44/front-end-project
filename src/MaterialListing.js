import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const MaterialListing = () => {

    const [materialData, setMaterialData] = useState(null);
    const navigate = useNavigate();

    const LoadDetail = (id) => {
        navigate("/material/detail/" + id);
    }
    const LoadEdit = (id) => {
        navigate("/material/edit/" + id);
    }
    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("http://localhost:8000/materials/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }

    useEffect(() => {
        fetch("http://localhost:8000/materials").then((res) => {
            return res.json();
        }).then((resp) => {
            setMaterialData(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <h1>Materials</h1>
                    <div className="divbtn">
                        <Link to="material/create" className="btn-add">Add(+)</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Material Name</td>
                                <td>Color</td>
                                <td>Price (per m3)</td>
                                <td>Volume (m3) </td>
                                <td>Date Delivered</td>
                            </tr>
                        </thead>
                        <tbody>

                            {materialData &&
                                materialData.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.color}</td>
                                        <td>{item.price}</td>
                                        <td>{item.volume}</td>
                                        <td>{item.date}</td>
                                        <td><a onClick={() => { LoadEdit(item.id) }} className="btn">Edit</a>
                                            <a onClick={() => { Removefunction(item.id) }} className="btn-delete">Delete</a>
                                            <a onClick={() => { LoadDetail(item.id) }} className="btn">Details</a>
                                        </td>
                                    </tr>

                                ))
                            }

                        </tbody>

                    </table>
                    <p>  Total Price For Materials: {materialData && materialData.reduce((sum, i) => (sum += i.volume * i.price), 0)}</p>
                </div>
            </div>
        </div >
    );
}
export default MaterialListing;