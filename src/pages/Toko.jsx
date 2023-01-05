import React, { Component } from 'react';
import Store from "../container/StorePost";
import ImgPrlx from './ImgPrlx';





export default class Toko extends Component {
  render() {
    return (
      <div>
        <ImgPrlx/>
        
        <Store/>
      </div>
    )
  }
}
