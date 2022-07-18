import React from "react";
import './Home.css';
import Header from './header';
import Main from "./components/main";
import Nav from "./Nav";
import * as Icon from 'react-bootstrap-icons';
import Mailer from "./component/mailer";
import Courses from "./Courses";
import {ImUser} from "react-icons/im";
import {AiOutlineClockCircle} from "react-icons/ai";
import {FaHandshake,FaUserGraduate} from "react-icons/fa";




function Home() {
  return (
    
    
    
    <>
   
  
    
    <Header/>
    
    <Nav/>
    <div className="col-md-12">
    <div className="hero">
      <img className="col-md-12"  src="./hero.jpeg" />
      
      </div>

      <div className="welcome-div-2">
                <div><ImUser className="icons"></ImUser><br/>
                    <p className="regstu-1">20,000+</p><br/>
                    <p className="regstu-2">REGISTERED STUDENTS</p>
                </div>
                <div><FaUserGraduate className="icons"/><br/>
                    <p className="regstu-1">5,000+</p><br/>
                    <p className="regstu-2">STUDENTS PLACED</p>
                </div>
                <div><AiOutlineClockCircle className="icons"/><br/>
                    <p className="regstu-1">109 Hours</p><br/>
                    <p className="regstu-2">TRAININGS DELIVERED</p>
                </div>
                <div><FaHandshake className="icons"/><br/>
                    <p className="regstu-1">50+</p><br/>
                    <p className="regstu-2">PREFERRED PATNERS</p>
                </div>
            </div>
        
      <div className="container-fluid" id="langcourse">
            <center><h1>Diploma in stock Market</h1></center>
            <div className="container" id="langcourse-item">
              <div className="col-md-12" id="langcourse-item1">
              <center><img className="dipimage" src="./diploma.jpg"/></center><br/>
              <center><h4>Learn English</h4></center>
              <center><span>Course Duration: 6 Months</span></center>
              <center><span>Number of Certificates: 3</span></center><br/>
              <center><div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-secondary" id="lb1">Brouchure</button>
            <button type="button" class="btn btn-secondary" id="lb2">Register</button>
      </div></center>
              
              </div>
            </div>
            </div>
            </div>
        <div className="container-fluid" id="boc">
        <center><h1>Business Oriented Courses</h1></center>
        <div className="container" id="boc-item">
          <div className="col-md-6" id="boc-item1">
            <center><img className="image" src="./diploma.jpg"/></center><br/>
            <center><h3>Market Expert</h3></center><br/>
            <center><span>Course Duration: 3 months</span></center><br/>
            <center><div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-secondary" id="lb1">Brouchure</button>
  <button type="button" class="btn btn-secondary" id="lb2">Register</button>
</div></center>
            

          </div>
          <div className="col-md-6" id="boc-item2">
          <center><img className="image" src="./diploma.jpg"/></center><br/>
            <center><h3>Yogic Science with Naturopathy</h3></center><br/>
            <center><span>Course Duration: 3 months</span></center><br/>
            <center><div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-secondary" id="lb1">Brouchure</button>
  <button type="button" class="btn btn-secondary" id="lb2">Register</button>
</div></center>

          </div>
          </div>

          
          <div className="container-fluid" id="tut">
            <center><h1>Tutorials</h1></center>
            <div className="container" id="tut-item">
              <div className="col-md-4" id="tut-item1">
              <center><img className="image" src="./diploma.jpg"/></center><br/>
              <center><h4>Science/ Maths/ English Grade 8</h4></center>
              <center><span>Choose any 2</span></center>
              <center><span>Combination Courses</span></center>
              <center><span>ICSE and CBSE</span></center>
              <h5 className="rate">$29/day</h5>
              <center><img className="flowerimg" src="./flower.jpg"/></center>
              
              <center><div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-secondary" id="lb1">Brouchure</button>
  <button type="button" class="btn btn-secondary" id="lb2">Register</button>
</div></center>


              </div>
              <div className="col-md-4" id="tut-item2">
              <center><img className="image" src="./diploma.jpg"/></center><br/>
              <center><h4>Science/ Maths/ English Grade 9</h4></center>
              <center><span>Choose any 2</span></center>
              <center><span>Combination Courses</span></center>
              <center><span>ICSE and CBSE</span></center>
              <h5 className="rate">$29/day</h5>
              <center><img className="flowerimg" src="./flower.jpg"/></center>
              <center><div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-secondary" id="lb1">Brouchure</button>
  <button type="button" class="btn btn-secondary" id="lb2">Register</button>
</div></center>

              </div>
              <div className="col-md-4" id="tut-item3">
              <center><img className="image" src="./diploma.jpg"/></center><br/>
              <center><h4>Science/ Maths/ English Grade 10</h4></center>
              <center><span>Choose any 2</span></center>
              <center><span>Combination Courses</span></center>
              <center><span>ICSE and CBSE</span></center>
              <h5 className="rate">$29/day</h5>
              <center><img className="flowerimg" src="./flower.jpg"/></center>
              <center><div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-secondary" id="lb1">Brouchure</button>
  <button type="button" class="btn btn-secondary" id="lb2">Register</button>
</div></center>

              </div>

              

            </div>

            


          </div>
          <div className="container-fluid" id="tut">
           
            <div className="container" id="tut-item">
              <div className="col-md-3" id="tut-item1">
              <center><img className="image" src="./diploma.jpg"/></center><br/>
              <center><h4>Physics/ Chemistry/ Maths/ Bio
Grade 11</h4></center>
              <center><span>Choose any 2</span></center>
              <center><span>Combination Courses</span></center>
              <center><span>ICSE and CBSE</span></center>
              <h5 className="rate1">$29/day</h5>
              <center><img className="flowerimg" src="./flower.jpg"/></center>
              <center><div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-secondary" id="lb1">Brouchure</button>
  <button type="button" class="btn btn-secondary" id="lb2">Register</button>
</div></center>


              </div>
              <div className="col-md-3" id="tut-item1">
              <center><img className="image" src="./diploma.jpg"/></center><br/>
              <center><h4>Physics/ Chemistry/ Maths/ Bio
Grade 12</h4></center>
              <center><span>Choose any 2</span></center>
              <center><span>Combination Courses</span></center>
              <center><span>ICSE and CBSE</span></center>
              <h5 className="rate1">$29/day</h5>
              <center><img className="flowerimg" src="./flower.jpg"/></center>
              <center><div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-secondary" id="lb1">Brouchure</button>
  <button type="button" class="btn btn-secondary" id="lb2">Register</button>
</div></center>


              </div>
              <div className="col-md-3" id="tut-item1">
              <center><img className="image" src="./diploma.jpg"/></center><br/>
              <center><h4>Business Studies/ Accountancy/ English
Grade 11</h4></center>
              <center><span>Choose any 2</span></center>
              <center><span>Combination Courses</span></center>
              <center><span>ICSE and CBSE</span></center>
              <h5 className="rate1">$29/day</h5>
              <center><img className="flowerimg" src="./flower.jpg"/></center>
              <center><div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-secondary" id="lb1">Brouchure</button>
  <button type="button" class="btn btn-secondary" id="lb2">Register</button>
</div></center>


              </div>
              <div className="col-md-3" id="tut-item1">
              <center><img className="image" src="./diploma.jpg"/></center><br/>
              <center><h4>Business Studies/ Accountancy/ English
Grade 12</h4></center>
              <center><span>Choose any 2</span></center>
              <center><span>Combination Courses</span></center>
              <center><span>ICSE and CBSE</span></center>
              <h5 className="rate1">$29/day</h5>
              <center><img className="flowerimg" src="./flower.jpg"/></center>
              <center><div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-secondary" id="lb1">Brouchure</button>
  <button type="button" class="btn btn-secondary" id="lb2">Register</button>
</div></center>


              </div>

              </div>
              </div>
              
              <div className="container-fluid" id="langcourse">
            <center><h1>Language Courses</h1></center>
            <div className="container" id="langcourse-item">
              <div className="col-md-12" id="langcourse-item1">
              <center><img className="dipimage" src="./diploma.jpg"/></center><br/>
              <center><h4>Learn English</h4></center>
              <center><span>Level A1 & A2</span></center>
              <center><span>Level B1 & B2</span></center>
              <center><span>Level C1 & C2</span></center><br/>
              <center><div class="btn-group" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-secondary" id="lb1">Brouchure</button>
              <button type="button" class="btn btn-secondary" id="lb2">Register</button>
              </div></center>
              </div>
              </div>
            </div>
            
            
            
            
            <div className="container-fluid" id="courses">
            <h1>Our Courses are fit for</h1>
            
            <div className="ad">
              <div className="col-md-4" id="course-item1">
              <img className="workingman" src="./workingman.jpeg"/>



              </div>
              
              
              <div className="col-md-4" id="boxes">
                <div className="box">Fresh Graduates (Any Stream)</div>
                <div className="box">Housewives & Retired</div>
                <div className="box">CA/ CFA/ CS/ MBA</div>

              </div>
              <div className="col-md-4" id="boxes1">
                <div className="box">Fresh Graduates (Any Stream)</div>
                <div className="box">Housewives & Retired</div>
                <div className="box">CA/ CFA/ CS/ MBA</div>

              </div>
              </div><br/><br/>
              <h1>What our Student Says about Us</h1>
              <div className="wss">
                <div className="col-md-4" id="course-item2">
                  <img className="women" src="./women.jpeg"/>
                </div>
                <div className="col-md-8" >
                  <video id="video" src="./learningera.mp4" controls/>

                </div>
              </div>
             
           
            


            </div><br/><br/>
            <div className="container-fluid" id="reviews">
                <center><h1>Student Testinomial</h1></center>
                <div className="reviewcontainer">
                <div className="col-md-4" id="review1">
                  <h6>I have learned more about financing after one month of joining this course than these past years. Great course and faculty.</h6>
                  <center><img id="reimg" src="./review.jpeg"/></center>
                  <center><h6>Rithu</h6></center>

                </div>
                <div className="col-md-4" id="review2">
                  <h6>I am finally being able to understand the importance of finance management in my day to day life and I have even helped out my relatives and friends. Some of them are even part of this course and very happy with it.</h6>
                  <center><img id="reimg" src="./women.jpeg"/></center>
                  <center><h6>Ishika</h6></center>
                </div>
                <div className="col-md-4" id="review3">
                  <h6>I have been very lucky to land myself with such an amazing team of learning era.. Highly recommended course..</h6>
                  <center><img id="reimg" src="./review.jpeg"/></center>
                  <center><h6>Pooja</h6></center>
                   

                </div>
                </div>

              </div>
              
            
            
            <div className="col-md-12">
            <Mailer/>
            </div> 
            <div className="container-fluid" id="footer">
              <div className="footercontainer">
                <div className="col-md-3" id="address">
                  <h2 >Address</h2><br/>
                  <h6>USA: 510, Business Forest, DR Tampa, Florida 33634</h6><br/>
                  <h6>India: A-14 Workly Space Sector 59 Noida 201301</h6><br/>
                  <img src="./logo.png"/>

                </div>
                <div className="col-md-3" id="contact">
                  <h2>Contact</h2><br/>
                  <h6>help@learningera.in</h6><br/>
                  <h6>+91-8080803393</h6>

                </div>
                <div className="col-md-3" id="contactlink">
                  <h2>Quick links</h2><br/>
                  <a>About us</a><br/><br/>
                  <a >Register with Us</a><br/><br/>
                  <a style={{color:"white"}} href={<Courses/>}>Courses</a>
                </div>
                <div className="col-md-3" id="social">
                  <h2>social</h2>
                  <i class="bi bi-facebook"></i>Facebook<br/>
                  <i class="bi bi-instagram"></i>Instagram

                </div>

              </div>

            </div>

            
        
           

          





        
        </div>
        <div>
          
          

          
          
        

      


   

      
      

    </div>
    </>
    

  );
}

export default Home;