import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from '@mui/material';

function Service(props) {
    return (
        <div className='service-wrapper'>
            <Icon component={props.service.icon} className="service-icon"/>
            <label className='service-label'>{props.service.description}</label>
        </div>
    )
}

Service.propTypes = {
    service: PropTypes.object.isRequired
}

export default Service