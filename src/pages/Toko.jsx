import React, { Component } from 'react'
import Store from "../container/StorePost"


export default class Toko extends Component {
  render() {
    return (
      <div>
        <h1>Toko</h1>
        <Store/>
      </div>
    )
  }
}
