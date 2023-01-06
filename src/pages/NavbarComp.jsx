import React, { Component,Fragment } from 'react'
import { Navbar, Nav} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { BrowserRouter ,Routes, Route, Link } from 'react-router-dom';
import LOGO from './img/LOGO.png';


import Beranda from './Beranda';
import Toko from './Toko';
import About from './About';
import Aktivitas from './Aktivitas';
import LandingPage from './LandingPage';

class NavbarComp extends Component {
  state= {
    showComponent: true
  }

  render() {
    return (
     <BrowserRouter>
          <Fragment>
            <div>
                <Navbar collapseOnSelect expand="lg" bg="success" className='shadow fixed-top' variant="dark">
                <Container fluid>
                    <Navbar.Brand className='fw-bold' href="#home"><img className='mx-1' src={LOGO} width={40} height={40} alt='logo' />TernakSignature</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav className="me-auto">
                      </Nav>
                      <Nav>
                          <Link to="/beranda" className='nav-link'>Beranda</Link>
                          <Link to="/toko" className='nav-link'>Toko</Link>
                          <Link to="/aktivitas" className='nav-link'>Aktivitas</Link>
                          <Link to="/about" className='nav-link'>About Us</Link>
                      </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
              </div>

            <Routes>
                <Route path='/' element={<LandingPage/>}/>
                <Route path='/beranda' element={<Beranda/>}/>
                <Route path='/toko' element={<Toko/>}/>
                <Route path='/aktivitas' element={<Aktivitas/>}/>
                <Route path='/about' element={<About/>}/>
            </Routes>

          </Fragment>
          
        </BrowserRouter>
      
        
      

      
      
        
      
      
      
    )
  }
}

export default NavbarComp;