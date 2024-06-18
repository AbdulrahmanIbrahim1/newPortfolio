import React from 'react'
import {  Card } from 'react-bootstrap'
import PropTypes from 'prop-types';


export default function SingleCard({ image, Title, description, link, linkGitHub }) {

  const truncateText = (text, maxLength) => {
    if (!text) {
      return '';
    }
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <Card style={{ width: '18rem' }} className='m-auto'>
      <div className="image-container">
        <Card.Img variant="top" src={image} className='proj-img' />
        <div className="overlay">
          <a href={link} className='btn btn-secondary' target='_blank' rel='noopener noreferrer' > live Demo </a>
          <a href={linkGitHub} className='btn btn-secondary mx-2' target='_blank' rel='noopener noreferrer'> <i className="fa-brands fa-github"></i></a>
        </div>
      </div>
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Text className='text-ellipsis'>
          {truncateText(description, 50)}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  )
}

SingleCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  linkGitHub: PropTypes.string,
};
