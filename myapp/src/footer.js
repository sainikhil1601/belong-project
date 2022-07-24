import React from 'react'
import './footer.css'
import Courses from './Courses'

function Footer() {
  return (
    
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
  )
}

export default Footer