import React from "react";

const GetKonten = (props) => {
  return (
    <div className="kontenAPI container-fluid mb-3">
      <div className="card">
        <div className="card-body">
          <h4 className="nama card-title text-primary">{props.nama}</h4>
          <p className="postTime card-text text-muted ">Diposting pada {props.postTime}</p>
          <p className="judul card-text fw-bold">{props.judul}</p>
          <p className="konten card-text">{props.konten}</p>
        </div>
      </div>
    </div>
  );
};

export default GetKonten;
