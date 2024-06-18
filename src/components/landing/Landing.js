import React from 'react'
import { Container } from 'react-bootstrap'
import './landing.css'

export default function Landing() {
  return (
    <>
    <div className='landing'>
    <Container className='d-flex align-items-center justify-content-around land m-auto' >
      <div className='left-land'>
        <h2>Abdelrahman Ibrahim </h2>
        <h3 className='typing'>Frontend Developer</h3>
        <div>
              <a href="https://github.com/AbdulrahmanIbrahim1" className='btn  fs-3 color-social' target='_blank' rel='noopener noreferrer' ><i className="fa-brands fa-github"></i></a>
              <a href="https://www.facebook.com/Body2024" className='btn  fs-3 color-social' target='_blank' rel='noopener noreferrer' ><i className="fa-brands fa-facebook"></i></a>
              <a href="https://www.linkedin.com/in/abdelrahman-ibrahim-4b3671254/" className='btn fs-3 color-social' target='_blank' rel='noopener noreferrer' ><i className="fa-brands fa-linkedin"></i></a>
        </div>
      </div>

      <div className='right-land'>
          <div className='my-img'>
            <img className='img-fluid rounded-circle border   border-primary-subtle' src="https://scontent-hbe1-1.xx.fbcdn.net/v/t1.6435-9/193954787_792114128106857_3103819073891465285_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEwfbohvVKfuDJd_C0tF9f4cfeYcu7k5H5x95hy7uTkfrMnfRbRceBKyXpGOxFDpsaHHiG2MZJpqW1YK2yRN-LB&_nc_ohc=Wf_ibvQrJmYQ7kNvgGf-_6u&_nc_ht=scontent-hbe1-1.xx&oh=00_AYDD4uaYF6b41SuBsirBc5pKXp0mguHFDb31jHy0NxT_UQ&oe=66981F15" alt="" />
        </div>
      </div>
    </Container>
    </div>
    </>
  )
}
