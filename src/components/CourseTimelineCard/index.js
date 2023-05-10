import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {timelineDetails} = props
  const {courseTitle, description, duration, tagsList} = timelineDetails
  return (
    <div className="course-card">
      <div className="title-container">
        <h1 className="course-title">{courseTitle}</h1>
        <p className="duration">
          <AiFillClockCircle className="timer-icon" />
          {duration}
        </p>
      </div>
      <p className="description">{description}</p>
      <ul className="taglist">
        {tagsList.map(each => (
          <li className="tag-item" key="each.id">
            <p className="tag-text">{each.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
