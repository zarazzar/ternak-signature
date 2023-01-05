import React  from 'react'
import bebinImg from "../pages/img/bebin.jpg";

const Bebin = props=> {
   
    return (
        <div className="card card-widt shadow bg-clr" >
            <img src={bebinImg} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <p className="card-text text-success fw-bold" >Bebin Paula</p>
                    <p className="card-text text-secondary">Membuat API menggunakan MongoDb.</p>
                </div>
            </div>
        )
  
    }

export default Bebin;
