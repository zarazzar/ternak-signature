import axios from "axios";
import React, { Component, Fragment } from "react";
import BerandaKonten from "../component/BerandaKonten"

class BerandaGet extends Component {
  state = {
    get: [],
    // formStore: {
    //     id:1,
    //     urlGambar:'',
    //     judul:'',
    //     deskripsi:'',
    //     urlKonten:'',

    // },
   
  };
  getDataAPI=()=>
  {
     //pake axios
     axios.get("https://if3b-zarazzar.vercel.app/beranda").then((result) => {
        this.setState({
          get: result.data,
        });
      });
  }

 
  componentDidMount() {
   this.getDataAPI();
  }

  render() {
    return (
      <Fragment>
 
        {this.state.get.map((get) => {
          return <BerandaKonten key={get._id} data={get}   />;
        })}
      </Fragment>
    );
  }
}

export default BerandaGet;
