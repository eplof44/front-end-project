import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CompactPicker } from "react-color";

const MaterialCreate = () => {
    const [name, setName] = useState("");
    const [color, setColor] = useState("");
    const [price, setPrice] = useState("");
    const [volume, setVolume] = useState("");
    const [date, setDate] = useState("");

    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const materialData = { name, color, price, volume, date };


        fetch("http://localhost:8000/materials", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(materialData)
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
                                <h2>Add Material</h2>
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
                                            />
                                        </div>
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
                                            <label>Date Delivered</label>
                                            <input value={date} onChange={e => setDate(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn" type="submit">Save</button>
                                            <Link to="/" className="btn">Back</Link>
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

export default MaterialCreate;