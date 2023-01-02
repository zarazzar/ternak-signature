import React from "react";
import "./GetStore.css";
import { Trash2 } from 'react-bootstrap-icons';
import { PencilSquare } from "react-bootstrap-icons";


//<ArrowRight className="ml-4" />

const GetStore = (props) => {
  return (
    <div className="container" >
      <div className="row">
        <div className="col-md-">

          <div className="shadow card mb-4 ">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img className="img-fluid rounded-start " src={props.data.urlFoto} alt="gambar produk" />

                  </div>
                  <div className="col-md-8 ">
                      <div className="d-grid  d-md-flex justify-content-md-end">
                        <button className="edit btn" type="button" onClick={()=>props.edit(props.data)} >Edit <PencilSquare /></button>
                        <button className="hapus btn" type="button" onClick={()=>props.hapus(props.data._id)} >Hapus <Trash2/></button>
                      </div>
                      <div className="card-body">
                          <h5 className="produk card-title">{props.data.namaBarang}</h5>
                          <p className="card-text">
                            <small className="harga text-primary">Rp.{props.data.harga}</small>
                          </p>
                          <p className="deskripsi card-text">{props.data.deskripsi}</p>
                          <button type="button" className="nomorHP btn btn-primary">
                            {props.data.nomorHP} 
                          </button>
                      </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    
       
       
  );
};

export default GetStore;
