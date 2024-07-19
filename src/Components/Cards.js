//import  Button  from "react-bootstrap/Button";
//import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.css'
import './Cards.css';


function CardsPage() {
    
    return (
      <section className="section student-course">
      <div className="container">
      <div className="course-widget">
      <div className="row">
      <div className="col-lg-3 col-md-6">
      <div className="course-full-width">
      <div className="blur-border course-radius align-items-center aos aos-init aos-animate" data-aos="fade-up">
      <div className="online-course d-flex align-items-center">
      <div className="course-img">
      <img src="https://mylearn.kaa.org.pk/assets/img/pencil-icon.svg" alt=""/>
      </div>
      <div className="course-inner-content">
      <h4><span>1</span>K</h4>
      <p>Online Courses</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="col-lg-3 col-md-6 d-flex">
      <div className="course-full-width">
      <div className="blur-border course-radius aos aos-init aos-animate" data-aos="fade-up">
      <div className="online-course d-flex align-items-center">
      <div className="course-img">
      <img src="https://mylearn.kaa.org.pk/assets/img/cources-icon.svg" alt=""/>
      </div>
      <div className="course-inner-content">
      <h4><span>42</span>+</h4>
      <p>Expert Tutors</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div class="col-lg-3 col-md-6 d-flex">
      <div class="course-full-width">
      <div class="blur-border course-radius aos aos-init aos-animate" data-aos="fade-up">
      <div class="online-course d-flex align-items-center">
      <div class="course-img">
      <img src="https://mylearn.kaa.org.pk/assets/img/certificate-icon.svg" alt=""/>
      </div>
      <div className="course-inner-content">
      <h4><span>0</span>K+</h4>
      <p>Ceritified Courses</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="col-lg-3 col-md-6 d-flex">
      <div className="course-full-width">
      <div className="blur-border course-radius aos aos-init aos-animate" data-aos="fade-up">
      <div className="online-course d-flex align-items-center">
      <div className="course-img">
      <img src="https://mylearn.kaa.org.pk/assets/img/gratuate-icon.svg" alt=""/>
      </div>
      <div class="course-inner-content">
      <h4><span>11</span>K +</h4>
      <p>Online Students</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      
    );
  }
  
  export default CardsPage;