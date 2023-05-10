import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {timelineDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = timelineDetails
  return (
    <div className="project-card">
      <img className="project-img" src={imageUrl} alt="project" />
      <div className="title-container">
        <h1 className="project-title">{projectTitle}</h1>
        <p className="duration">
          <AiFillCalendar className="timer-icon" />
          {duration}
        </p>
      </div>
      <p className="description">{description}</p>
      <a
        className="project-url"
        rel="noreferrer"
        target="_blank"
        href={projectUrl}
      >
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
