import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from '@mui/material';
import { FormText } from 'react-bootstrap';

function Activity(props) {
    return (
        <div className='activity-wrapper'>
            <Icon component={props.activity.icon} className="service-icon"/>
            <FormText className='activity-label'>{props.activity.description}</FormText>
            <FormText className='activity-distance'>{props.activity.distance}</FormText>
        </div>  
    )
}

Activity.propTypes = {
    activity: PropTypes.object.isRequired
}

export default Activity