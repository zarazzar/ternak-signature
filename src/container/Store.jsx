import axios from "axios";
import React, { Component, Fragment } from "react";
import GetStore from "../component/GetStore";

class Store extends Component {
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
       {this.state.get.map((get) => {
          return <GetStore key={get._id} data={get} hapus={this.handleHapus} edit={this.handleEdit} />;
        })}
      </Fragment>
    );
  }
}

export default Store;
