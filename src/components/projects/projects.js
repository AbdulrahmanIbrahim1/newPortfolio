import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SingleCard from './card'
import './prjects.css'
import dashboard from './projectsImages/dashboard.png'
import snapup from './projectsImages/snapup.png'
import space from './projectsImages/space.png'
import summry from './projectsImages/summary.png'
import chat from './projectsImages/chat.png'
import cart from './projectsImages/cart.png'

export default function Projects() {
  return (
    <section>
      <Container className='projects py-5' id="projects">
        <h2 className='py-3'>Projects</h2>
        <Row className='gap-4 p-2'>
          <SingleCard image={dashboard} Title={"Dashboard"} description={"this is Full Dashboard"} link={"https://mydashboard-1.netlify.app/"} linkGitHub={"https://github.com/AbdulrahmanIbrahim1/Dashboard-1"} />
          <SingleCard image={snapup} Title={"Snapup E-commerce"} description={"this is E-commerce site "} link={"https://snapup-ecommerce.netlify.app/"} linkGitHub={"https://github.com/AbdulrahmanIbrahim1/SnapUp-ecommerce"} />
          <SingleCard image={space} Title={"Space "} description={"this is space task from frontend mentor "} link={"https://abdulrahmanibrahim1.github.io/Front-end--space/index.html"} linkGitHub={"https://github.com/AbdulrahmanIbrahim1/Front-end--space"} />
          <SingleCard image={summry} Title={"Results_summary "} description={"Frontend_Mentor_Results_summary_component"} link={"https://abdulrahmanibrahim1.github.io/Frontend_Mentor_Results_summary_component/"} linkGitHub={"https://github.com/AbdulrahmanIbrahim1/Frontend_Mentor_Results_summary_component"} />
          <SingleCard image={chat} Title={"chat-app-css"} description={"Frontend_Mentor_chat-app-css"} link={"https://github.com/AbdulrahmanIbrahim1/chat-app-css-illustration-master"} linkGitHub={"https://abdulrahmanibrahim1.github.io/chat-app-css-illustration-master/"} />
          <SingleCard image={cart} Title={"Cart App"} description={"Cart App"} link={"https://basic-cart-app-react.netlify.app/"} linkGitHub={"https://github.com/AbdulrahmanIbrahim1/Basic-cart"} />
          

          
          
        </Row>
      </Container>
    </section>
  )
}
