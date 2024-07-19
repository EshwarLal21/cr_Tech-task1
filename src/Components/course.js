import React from "react";
import angular from './angular.png'
function Courses(){

 return(
  <div>
<div Container className='con' style={{ padding: '30px 0 30px 30px', backgroundColor: 'white', border: '0.5px solid grey' }}>
<div className="row">
<div className="col-lg-3 col-md-6 d-flex">
      <div className="course-full-width">
      <div className="blur-border course-radius aos aos-init aos-animate" data-aos="fade-up">
      <div className="online-course d-flex align-items-center">
  <div className="card" >
  <img className="image-card mx-auto mb-5" src="https://mylearn.kaa.org.pk/assets/img/categories-icon-02.png" width="120px" height="120px" />
<h2 className="card-image mb-4"> Angular Developer</h2>
<p className="card-text mb-5">40 Instructors</p>
  </div>
</div>
</div>
</div>
</div>  
<div className="col-lg-3 col-md-6 d-flex">
      <div className="course-full-width">
      <div className="blur-border course-radius aos aos-init aos-animate" data-aos="fade-up">
      <div className="online-course d-flex align-items-center">
  <div className="card" >
  <img className="image-card mx-auto mb-5" src={angular}  width="120px" height="120px" />
<h2 className="card-image mb-4"> Angular Developer</h2>
<p className="card-text mb-5">40 Instructors</p>
  </div>
</div>
</div>
</div>
</div>
  
<div className="col-lg-3 col-md-6 d-flex">
      <div className="course-full-width">
      <div className="blur-border course-radius aos aos-init aos-animate" data-aos="fade-up">
      <div className="online-course d-flex align-items-center">
  <div className="card" >
  <img className="image-card mx-auto mb-5" src="https://mylearn.kaa.org.pk/assets/img/categories-icon-01.png"  width="120px" height="120px" />
<h2 className="card-image mb-4"> Angular Developer</h2>
<p className="card-text mb-5">40 Instructors</p>
  </div>
</div>
</div>
</div>
</div>
<div className="col-lg-3 col-md-8 d-flex">
      <div className="course-full-width">
      <div className="blur-border course-radius aos aos-init aos-animate" data-aos="fade-up">
      <div className="online-course d-flex align-items-center text-danger cursor-pointer">
  <div className="card" >
  <img className="image-card mx-auto mb-5" src="https://mylearn.kaa.org.pk/assets/img/categories-icon-03.png" width="120px" height="120px" />
<h2 className="card-image mb-4"> Angular Developer</h2>
<p className="card-text mb-5">40 Instructors</p>
  </div>
</div>
</div>
</div>
</div>

</div>
</div>
</div>
 );


}
export default Courses;
