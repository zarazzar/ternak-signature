import axios from "axios";
import React, { Component, Fragment } from "react";
import GetStore from "../component/GetStore";

class StorePost extends Component {
  state = {
    get: [],
    formStore: {
        id:1,
        urlFoto:'',
        namaBarang:'',
        harga:'',
        deskripsi:'',
        nomorHP:'',

    }
  };
  getDataAPI=()=>
  {
     //pake axios
     axios.get("https://if3b-zarazzar.vercel.app/store").then((result) => {
        this.setState({
          get: result.data,
        });
      });
  }

  //POST
  PostDataAPI = () => {
    axios.post("https://if3b-zarazzar.vercel.app/store", this.state.formStore).then(
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
  //PUT
  handleEdit=(data)=>{
    console.log(data)
    this.setState({
      formStore:data
    })
    // axios.put('https://if3b-zarazzar.vercel.app/store/'+data, this.state.formStore)
    // .then((res)=>{
    //   console.log(res)
    //   this.getDataAPI();
    // })

  }

  //DELETE
  handleHapus =(data)=>{
    console.log(data)
    axios.delete('https://if3b-zarazzar.vercel.app/store/'+data)
    .then((res)=>{
      console.log(res);
    });


  }

  handleFormChange = (event) => {
    //ambil value isi form
    let formStoreNew = { ...this.state.formStore };
    formStoreNew[event.target.name] = event.target.value;
    this.setState({
      formStore: formStoreNew,
    });
  };

  componentDidMount() {
   this.getDataAPI();
  }

  render() {
    return (
      <Fragment>

        <div className="form-add-post">
            <form className="container">
            <h2 className="text-primary">JUAL DISINI</h2>


              <div className="mb-3">
                <label htmlFor="nama" className="color-primary form-label">
                  Link Gambar
                </label>
                <input type="text" onChange={this.handleFormChange} placeholder="https://gambar-ikan.jpg" className=" form-control" name="urlFoto" id="nama" value={this.state.formStore.urlFoto} />
                <label htmlFor="namaBarang" className="form-label">
                  Nama Barang
                </label>
                <input type="text" onChange={this.handleFormChange} placeholder="Vitamin Kerbau" className="form-control" name="namaBarang" id="namaBarang" value={this.state.formStore.namaBarang}/>
                <label htmlFor="harga" className="form-label">
                  Harga Barang
                </label>
                <input type="number" onChange={this.handleFormChange} placeholder="contoh : 30000" className="form-control" name="harga" id="harga" value={this.state.formStore.harga} />
                <label htmlFor="deskripsi" className="form-label">
                  Deskripsi Barang
                </label>
                <textarea type="text" onChange={this.handleFormChange} placeholder="deskripsi barang" className="form-control" name="deskripsi" id="deskripsi" value={this.state.formStore.deskripsi}/>
                 <label htmlFor="nomorHP" className="form-label">
                  Nomor HP Penjual
                </label>
                <input type="text" onChange={this.handleFormChange} placeholder="08XX-XXXX-XXXX" className="form-control" name="nomorHP" id="nomorHP" value={this.state.formStore.nomorHP}/>
                
              </div>
              <button type="button" onClick={this.handleButton} className="btn btn-success">
                Posting Produk
              </button>
            </form>
          </div>
        {this.state.get.map((get) => {
          return <GetStore key={get._id} data={get} hapus={this.handleHapus} edit={this.handleEdit} />;
        })}
      </Fragment>
    );
  }
}

export default StorePost;
