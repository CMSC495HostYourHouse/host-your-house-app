import React from 'react'
import Service from './Service'
import PropTypes from 'prop-types'

function ServiceList(props) {
  return (
    <div className='service-grid'>
        {props.services.map((service, index) => <Service key={index} service={service}/>)}
    </div>
  )
}

ServiceList.propTypes = {
    services: PropTypes.object.isRequired
}

export default ServiceList