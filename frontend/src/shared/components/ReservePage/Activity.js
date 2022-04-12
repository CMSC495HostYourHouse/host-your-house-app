import React from 'react'
import PropTypes from 'prop-types'

function Activity(props) {
    return (
        <div className='activity-wrapper'>
            <img className='service-icon' src={props.activity.imageLink} alt="Icon"></img>
            <label className='activity-label'>{props.activity.description}</label>
            <label className='activity-distance'>{props.activity.distance}</label>
        </div>  
    )
}

Activity.propTypes = {
    activity: PropTypes.object.isRequired
}

export default Activity