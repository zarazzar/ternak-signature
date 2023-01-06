import axios from "axios";
import React, { Component, Fragment } from "react";
import GetAktivitas from "../component/GetAktivitas";

class AktivitasPost extends Component {
  state = {
    get: [],
    formActivity: {
        id:1,
        nama:'',
        judul:'',
        konten:'',
        createdAt:''
    },
   
  };


  getDataAPI=()=>
  {
     
     //pake axios
     axios.get("https://if3b-zarazzar.vercel.app/ternak").then((result) => {
        this.setState({
          get: result.data,
        });
      }) ;
  }

  //POST
  PostDataAPI = () => {
    axios.post("https://if3b-zarazzar.vercel.app/ternak", this.state.formActivity).then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log("error", err);
      }
    );
  };

//DELETE
handleHapus =(data)=>{
    console.log(data)
    axios.delete('https://if3b-zarazzar.vercel.app/ternak/'+data)
    .then((res)=>{
      console.log(res);
    }
    );


  }

  handleFormChange = (event) => {
    //ambil value isi form
    let formActivityNew = { ...this.state.formActivity };
    formActivityNew[event.target.name] = event.target.value;
    this.setState({
      formActivity: formActivityNew,
    });
  };

  handleButton = () => {
     
    this.PostDataAPI();
    
  };

  componentDidMount() {
   this.getDataAPI();
  }

  render() {
    return (
      <Fragment>

        <div className="form-add-post">
          <br />
          <br />
          <form>
            <div className="form-group row mb-1">
                <label  className="col-sm-2 col-form-label ">Nama</label>
                    <div className="col-sm-10">
                    <input onChange={this.handleFormChange} type="text" className="form-control" id="nama" name="nama" placeholder="Nama" value={this.state.formActivity.nama}/>
                    </div>
            </div>
            <div className="form-group row mb-1">
                <label   className="col-sm-2 col-form-label" >Judul</label>
                    <div className="col-sm-10">
                    <input onChange={this.handleFormChange} type="text" className="form-control" id="judul" name="judul" placeholder="judul" value={this.state.formActivity.judul}/>
                    </div>
            </div>

            <div className="form-group row mb-2">
                <label className="col-sm-2 col-form-label">bagikan sesuatu</label>
                <textarea onChange={this.handleFormChange} type="text" placeholder="tulis sesuatu" className="form-control" name="konten" id="konten" value={this.state.formActivity.konten}/>
                    
            </div>
            
            <div className="col-sm-10">
                <button type="button" onClick={this.handleButton} className="btn btn-primary">posting</button>
            </div>
        </form>
            <br />
          </div>
          <br /><br /><br />
          <h2 className="text-secondary ">Dibagikan oleh Peternak lain</h2>
        {this.state.get.map((get) => {
          return <GetAktivitas key={get._id} data={get}  hapus={this.handleHapus}  />;
        })}
      </Fragment>
    );
  }
}

export default AktivitasPost;
