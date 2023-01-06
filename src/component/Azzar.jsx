import React  from 'react'
import azzarImg from "../pages/img/azzar.jpg";

const Azzar = props=> {
   
    return (
        <div className="card mx-2 pb-3 card-widt shadow bg-clr" >
            <img src={azzarImg} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <p className="card-text text-success fw-bold" >Azzar Rizky</p>
                    <p className="card-text text-secondary">As FullStack Developer.</p>
                </div>
            </div>
        )
  
    }

export default Azzar;
