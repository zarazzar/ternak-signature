import axios from "axios";
import React, { Component, Fragment } from "react";
import GetKonten from "../component/GetKonten";

class Konten extends Component {
  state = {
    get: [],
  };

  componentDidMount() {
    //pake axios
    axios.get("https://if3b-zarazzar.vercel.app/ternak").then((result) => {
      this.setState({
        get: result.data,
      });
    });
  }

  render() {
    return (
      <Fragment>
        {this.state.get.map((get) => {
          return <GetKonten key={get._id} nama={get.nama} postTime={get.createdAt} judul={get.judul} konten={get.konten} />;
        })}
      </Fragment>
    );
  }
}

export default Konten;
