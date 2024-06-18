import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './footer.css'

export default function Footer() {
  return (
    <footer>
      <Container className=' py-4 row0 d-0  '>
        <Row className='row  justify-content-between align-items-center ' >
          <div className='about col-lg-4' id='about'>
            <h4>About</h4>
            <p>I am a student in the third year of the Faculty of Science,
              Benha University, Department of Computer Science.
              I studied the field of frontend and studied React.
              I am also passionate about learning in the field of cybersecurity.
              I obtained some certificates from Maharah Tech, affiliated with the ITI Institute, and I am now learning the ejpt v2 course. </p>
          </div>

          <div className='contacts col-lg-4 d-flex justify-content-between align-items-center flex-column'>
            <span>Phone : +201091532721</span><br />
            {/* <span>Email : abdelrahmanibrahim0110@gmail.com</span> */}
            <div>
              <a href="https://github.com/AbdulrahmanIbrahim1" className='btn  fs-3 color-social' target='_blank' rel='noopener noreferrer' ><i className="fa-brands fa-github"></i></a>
              <a href="https://www.facebook.com/Body2024" className='btn  fs-3 color-social' target='_blank' rel='noopener noreferrer' ><i className="fa-brands fa-facebook"></i></a>
              <a href="https://www.linkedin.com/in/abdelrahman-ibrahim-4b3671254/" className='btn fs-3 color-social' target='_blank' rel='noopener noreferrer' ><i className="fa-brands fa-linkedin"></i></a>
            </div>
          </div>

          <div className='col-lg-4' >
            <p>&copy; 2024 Abdelrahman Ibrahim </p>
          </div>

        </Row>
      </Container>
    </footer>
  )
}
