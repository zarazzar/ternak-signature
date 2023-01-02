import axios from "axios";
import React, { Component, Fragment } from "react";
import GetKonten from "../component/GetKonten";

class KontenPost extends Component {
  state = {
    get: [],
      formKonten: {
      id: 1,
      nama: '',
      judul: '',
      konten: '',
    },
  };
  getDataAPI=()=>{
     //pake axios
     axios.get("https://if3b-zarazzar.vercel.app/ternak").then((result) => {
      this.setState({
        get: result.data,
      });
    });
  }

   PostDataAPI = () => {
    axios.post("https://if3b-zarazzar.vercel.app/ternak", this.state.formKonten).then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log("error", err);
      }
    );
  };

 handleButton = () => {
    this.PostDataAPI();
  };

  handleFormChange = (event) => {
    //ambil value isi form
    let formKontenNew = { ...this.state.formKonten };
    formKontenNew[event.target.name] = event.target.value;
    this.setState({
      formKonten: formKontenNew,
    });
  };


  componentDidMount() {
   this.getDataAPI();
  }



  render() {
    return (
      
      <Fragment>

          <div className="form-add-post">
            <form className="container-fluid">
              <div className="mb-3">
                <label htmlFor="nama" className="form-label">
                  Nama Peternakan
                </label>
                <input type="text" onChange={this.handleFormChange} placeholder="Kandang Ayam mang ujang" className="form-control" name="nama" id="nama" />
                <label htmlFor="judul" className="form-label">
                  Judul
                </label>
                <input type="text" onChange={this.handleFormChange} placeholder="Cara Menjaga kestabilan ekosistem di kandang " className="form-control" name="judul" id="judul" />
                <label htmlFor="konten" className="form-label">
                  Konten
                </label>
                <textarea type="text" onChange={this.handleFormChange} placeholder="isi konten disini" className="form-control" name="konten" id="konten" />
              </div>
              <button type="button" onClick={this.handleButton} className="btn btn-info">
                Posting
              </button>
            </form>
          </div>

        {this.state.get.map((get) => {
          return <GetKonten key={get._id} nama={get.nama} postTime={get.createdAt} judul={get.judul} konten={get.konten} />;
        })}
      </Fragment>
    );
  }
}

export default KontenPost;
