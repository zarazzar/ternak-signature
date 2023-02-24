import React, { Component } from 'react'
import './LandingPage.css';
import VIDBANNER from './img/kambing.mp4';
import Azzar from '../component/Azzar';
import Bebin from '../component/Bebin';

//Halaman About

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="hero">
                        <div className="hero__overlay"></div>

                        <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop" loading="lazy" className="hero__video">
                            <source src={VIDBANNER} type="video/mp4" />
                        </video>

                        <div className="hero__content h-100 container-custom position-relative">
                            <div className="d-flex h-100 align-items-center hero__content-width">
                            <div className="row text-white   ">
                                <h1 className="hero__heading fw-bold mb-4">Website ini dibuat menggunakan React.js</h1>
                                <br />
                                <p className='fw-bold'>Developer</p>
                                <div className="col-lg-6 col-sm-5 col-5">
                                  <Azzar/>
                                </div>

                                <div className="col-lg-6 col-sm-5 col-5">
                                  <Bebin/>
                                </div>
                            </div>
                            </div>
                        </div>
                </section>
      </div>
    )
  }
}
