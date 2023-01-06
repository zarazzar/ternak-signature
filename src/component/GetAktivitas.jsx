import React from "react";
import { Trash2 } from 'react-bootstrap-icons';


const GetAktivitas = (props) => {
  return (
    <div className="container mb-3 ">
       <div className="card">
        <div className="card-body">
        <div className="d-grid  d-md-flex justify-content-md-end">
             <button className="hapus btn" type="button" onClick={()=>props.hapus(props.data._id)} >Hapus <Trash2/></button>
        </div>
            <h5 className="card-title nama">{props.data.nama}</h5>
            <p className=" createdAt text-muted">di posting pada {props.data.createdAt}</p>

            <h2 className="card-subtitle fw-bold judul mb-2 text-success">{props.data.judul}</h2>
            <p className="card-text konten">{props.data.konten}</p>
             
        </div>
        </div>
      
    </div>
  );
};

export default GetAktivitas;
