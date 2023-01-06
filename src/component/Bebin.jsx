import React  from 'react'
import bebinImg from "../pages/img/bebin.jpg";

const Bebin = props=> {
   
    return (
        <div className="card mx-2 pb-3 card-widt shadow bg-clr" >
            <img src={bebinImg} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <p className="card-text text-success fw-bold" >Bebin Paula</p>
                    <p className="card-text text-secondary">As BackEnd Developer.</p>
                </div>
            </div>
        )
  
    }

export default Bebin;
