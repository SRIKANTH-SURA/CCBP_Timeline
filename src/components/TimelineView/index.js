import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimeLineView = props => {
  const {timelineItemsList} = props
  return (
    <div className="chrono-container">
      <div className="app-title-container">
        <h1 className="programme-title">MY JOURNEY OF CCBP 4.0</h1>
      </div>
      <Chrono
        mode="VERTICAL_ALTERNATING"
        items={timelineItemsList}
        theme={{
          primary: 'blue',
          secondary: 'white',
          cardForeColor: 'violet',
          titleColor: 'blue',
        }}
      >
        {timelineItemsList.map(eachTimeline =>
          eachTimeline.categoryId === 'COURSE' ? (
            <CourseTimelineCard
              key={eachTimeline.id}
              timelineDetails={eachTimeline}
            />
          ) : (
            <ProjectTimelineCard
              key={eachTimeline.id}
              timelineDetails={eachTimeline}
            />
          ),
        )}
      </Chrono>
    </div>
  )
}

export default TimeLineView
