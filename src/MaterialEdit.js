import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CompactPicker } from "react-color";

const MaterialEdit = () => {
    const { id } = useParams();

    useEffect(() => {
        fetch("http://localhost:8000/materials/" + id).then((res) => {
            return res.json();
        }).then((resp) => {
            setName(resp.name);
            setColor(resp.color);
            setPrice(resp.price);
            setVolume(resp.volume);
            setDate(resp.date);
            console.log(resp)
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    const [name, setName] = useState("");
    const [color, setColor] = useState("");
    const [price, setPrice] = useState("");
    const [volume, setVolume] = useState("");
    const [date, setDate] = useState("");


    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const materialdata = { name, color, price, volume, date };


        fetch("http://localhost:8000/materials/" + id, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(materialdata)
        }).then((res) => {
            alert('Saved successfully.')
            navigate('/');
        }).catch((err) => {
            console.log(err.message)
        })

    }
    return (
        <div>

            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>

                        <div className="card" style={{ "textAlign": "left" }}>
                            <div className="card-title">
                                <h2>Material Edit</h2>
                            </div>
                            <div className="card-body">

                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Material Name</label>
                                            <input value={name} onChange={e => setName(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Color</label>
                                            <CompactPicker
                                                color={color}
                                                onChange={(color) => {
                                                    setColor(color.hex);
                                                }}
                                            />                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Price (per m3)</label>
                                            <input value={price} onChange={e => setPrice(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Volume (m3)</label>
                                            <input value={volume} onChange={e => setVolume(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Date</label>
                                            <input value={date} onChange={e => setDate(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Save</button>
                                            <Link to="/" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}

export default MaterialEdit;