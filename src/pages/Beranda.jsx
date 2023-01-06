import React, { Component } from 'react';
import BerandaGet from '../container/BerandaGet';
import CarouselSlider from './CarouselSlider';


export default class Beranda extends Component {
  render() {
    return (
        <div>
          <br />
          <br />
          <CarouselSlider/>
          <br />
          <div className='container'>
            <br />
            <h1 className='text-center text-secondary'>Explore</h1>
            <hr />
            <BerandaGet/>

          </div>
        </div>
    )
  }
}
