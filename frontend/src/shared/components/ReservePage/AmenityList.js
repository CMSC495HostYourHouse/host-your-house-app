import React from 'react'
import Amenity from './Amenity'
import PropTypes from 'prop-types'

function AmenityList(props) {
  return (
    <div className='amenity-grid'>
        {props.amenities.map((amenity, index) => <Amenity key={index} amenity={amenity}/>)}
    </div>
  )
}

AmenityList.propTypes = {
    amenities: PropTypes.object.isRequired
}

export default AmenityList