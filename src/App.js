import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {Button, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import CardsPage from './Components/Cards';
import SearchBar from './Components/SearchBar';
//import images from './images.png'
//import footers from './Components/footer';
import FiveStar from './Components/fiveStart';
import fivestars from './fivestarts.png'
import Footer from './Components/footer';
import Topcatagory from './Components/TopCatatory';
import Courses from './Components/course';
import FeatureCourse from './Components/FeatureCourse';




function App() {
  return (

    <div className='App'>
<nav className='navbar navbar-expand-lg navbar-light bg-white d-flex justify-content-between sticky-top'>      <Navbar.Brand>
        <img src={logo} width="40px" height="40px" />{' '}
        Logo
      </Navbar.Brand>

      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav '>
        <Nav className= 'mx-auto w-50 mr-3'>
          <NavDropdown title='Home' align='end' >
            <NavDropdown.Item href='products/tea'>Tea</NavDropdown.Item>
            <NavDropdown.Item href='products/tea'>Coffee</NavDropdown.Item>
            <NavDropdown.Item href='products/tea'>GreenTea</NavDropdown.Item>
            <NavDropdown.Item href='products/tea'>CupCake</NavDropdown.Item>
            <NavDropdown.Item href='products/tea'>Milk</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title='Instructor' align='start'>
            <NavDropdown.Item href='products/tea'>Tea</NavDropdown.Item>
            <NavDropdown.Item href='products/tea'>Coffee</NavDropdown.Item>
            <NavDropdown.Item href='products/tea'>GreenTea</NavDropdown.Item>
            <NavDropdown.Item href='products/tea'>CupCake</NavDropdown.Item>
            <NavDropdown.Item href='products/tea'>Milk</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title='Student' align='start' >
            <NavDropdown.Item href='products/tea'>Tea</NavDropdown.Item>
            <NavDropdown.Item href='products/tea'>Coffee</NavDropdown.Item>
            <NavDropdown.Item href='products/tea'>GreenTea</NavDropdown.Item>
            <NavDropdown.Item href='products/tea'>CupCake</NavDropdown.Item>
            <NavDropdown.Item href='products/tea'>Milk</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title='Page' align='start'>
            <NavDropdown.Item href='products/tea'>Tea</NavDropdown.Item>
            <NavDropdown.Item href='products/tea'>Coffee</NavDropdown.Item>
            <NavDropdown.Item href='products/tea'>GreenTea</NavDropdown.Item>
            <NavDropdown.Item href='products/tea'>CupCake</NavDropdown.Item>
            <NavDropdown.Item href='products/tea'>Milk</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title='Blogs' align='start'>
            <NavDropdown.Item href='products/tea'>Tea</NavDropdown.Item>
            <NavDropdown.Item href='products/tea'>Coffee</NavDropdown.Item>
            <NavDropdown.Item href='products/tea'>GreenTea</NavDropdown.Item>
            <NavDropdown.Item href='products/tea'>CupCake</NavDropdown.Item>
            <NavDropdown.Item href='products/tea'>Milk</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <div className='ms-1'>
        <Button variant='outline-danger' className='me-2 rounded-full px-4 py-2 text-lg mx-2'>Sign Up</Button>
        <Button variant='outline-danger' className='me-2 rounded-full px-4 py-2 text-lg mx-2'>Sign In</Button>     </div>
      </Navbar.Collapse>
    </nav>
   <div className='content'>
   <div className="container mx-auto p-4">
   <h4 style={{ color: 'black' }}><strong>The Leader in Online Learning</strong></h4> 
   <div className="row">
      <div className="col-lg-7 col-md-6">
<div className='h1'>
   <h1 className='display-4 fw-bold text-lightblack'style={{ color: 'black' }} >Engaging and Accessing Online Courses</h1>
   </div>
   </div>
  

   <div className="col-md-1 d-flex align-items-end ml-5">
   <div className="girl-slide-img aos aos-init aos-animate" data-aos="fade-up">
   <img src={"https://mylearn.kaa.org.pk/assets/img/object.png"} alt=""/>
   </div>
</div>
</div>
   <div className='para'>
    <p  style={{ color: 'black' }}> <strong>Own your Future Learning Skills Onlines</strong></p>
   </div>

   </div>
  
   <SearchBar/>
   <br></br>
   <div className="container mx-auto p-4">
   <h4 style={{ color: 'black' }}> <strong>Trusted by over 15K Users worldwide since 2022</strong></h4> 
   </div>
<div className='stars'>
   <div className='para2 d-flex align-items-center'>
   <h1 className='me-3 fw-bold text-dark'>45+</h1>{''}
   <h1 className='me-3 fw-bold text-dark'>4.4</h1>
  <img src={fivestars} width='250px' height='70px'/>
  <i className="bi bi-star-fill"></i>
</div>
</div>

    <div><FiveStar/></div>
    
  </div>
   <CardsPage/>
   <Topcatagory/>
   <Courses/>
   <FeatureCourse/>
   <Footer/>


      
   
 <div>
  
 </div>

   </div>
  );
}

export default App;
