import React from 'react'
import PropTypes from 'prop-types'

function Service(props) {
    return (
        <div className='service-wrapper'>
            <img className='service-icon' src={props.service.imageLink} alt="Icon"></img>
            <label className='service-label'>{props.service.description}</label>
        </div>
    )
}

Service.propTypes = {
    service: PropTypes.object.isRequired
}

export default Service