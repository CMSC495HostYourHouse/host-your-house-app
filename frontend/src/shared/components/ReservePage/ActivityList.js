import React from 'react'
import Activity from './Activity'
import PropTypes from 'prop-types'

function ActivityList(props) {
  return (
    <div className='service-grid'>
        {props.activities.map((activity, index) => <Activity key={index} activity={activity}/>)}
    </div>
  )
}

ActivityList.propTypes = {
    activities: PropTypes.object.isRequired
}

export default ActivityList