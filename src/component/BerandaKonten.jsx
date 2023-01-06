import React from "react";

const BerandaKonten = (props)=>{
    return(
        <div>
            <div className="card mb-5">
                <img src={props.data.urlGambar} className="card-img-top urlGambar" alt="gambar konten tutorial"/>
                <div className="card-body ">
                    <h2 className="card-title judul fw-bold text-success">{props.data.judul}</h2>
                    <p className="card-text deskripsi">{props.data.deskripsi}</p>
                    <a href={props.data.urlKonten} className="urlKonten fw-bold text-dark" target="_blank" rel="noopener noreferrer">Read More..</a>
                </div>
            </div>
        </div>
    )
}

export default BerandaKonten;