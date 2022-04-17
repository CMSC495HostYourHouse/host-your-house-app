import React from 'react'
import PropTypes from 'prop-types'

function Photo(props) {
  return (
    <img className="photo" src={props.photo} alt='image'/>
  )
}

Photo.propTypes = {
    photo: PropTypes.string.isRequired
}

export default Photo