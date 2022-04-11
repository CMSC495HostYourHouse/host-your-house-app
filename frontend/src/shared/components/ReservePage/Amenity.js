import React from 'react'
import PropTypes from 'prop-types'

function Amenity(props) {
    return (
        <div className='amenity-wrapper'>
            <img className='amenity-icon' src={props.amenity.imageLink}></img>
            <label className='amenity-label'>{props.amenity.description}</label>
        </div>
    )
}

Amenity.propTypes = {
    amenity: PropTypes.string.isRequired
}

export default Amenity