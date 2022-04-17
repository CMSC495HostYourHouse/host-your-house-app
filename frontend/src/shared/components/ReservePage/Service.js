import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from '@mui/material';
import { FormText } from 'react-bootstrap';

function Service(props) {
    return (
        <div className='service-wrapper'>
            <Icon component={props.service.icon} className="service-icon"/>
            <FormText className='service-label'>{props.service.description}</FormText>
        </div>
    )
}

Service.propTypes = {
    service: PropTypes.object.isRequired
}

export default Service