import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from '@mui/material';

function Activity(props) {
    return (
        <div className='activity-wrapper'>
            <Icon component={props.activity.icon} className="service-icon"/>
            <label className='activity-label'>{props.activity.description}</label>
            <label className='activity-distance'>{props.activity.distance}</label>
        </div>  
    )
}

Activity.propTypes = {
    activity: PropTypes.object.isRequired
}

export default Activity