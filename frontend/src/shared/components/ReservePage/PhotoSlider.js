import React from 'react'
import Photo from './Photo';
import PropTypes from 'prop-types'

function PhotoSlider(props) {
    return (
        <div className="photo-container">
            {props.photos.map((photo, index) => <Photo key={index} photo={photo} />)}
        </div>
    );
}

PhotoSlider.propTypes = {
    photos: PropTypes.string.isRequired
}

export default PhotoSlider