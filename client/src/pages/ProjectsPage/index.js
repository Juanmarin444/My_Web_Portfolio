import './styles.css';
import Project from './Project';
import {
  taskManagerData,
  courseTrackerData,
  worldClockData,
  weatherAppData
} from './projectsData';

const Projects = () => {

  return (
    <div className="projects">
      <h1>React Projects (PWA)</h1>
      <div className="projects__react">
        <Project image={worldClockData.image} name={worldClockData.name} description={worldClockData.desc} url={worldClockData.url} />
        <Project image={weatherAppData.image} name={weatherAppData.name} description={weatherAppData.desc} url={weatherAppData.url} />
      </div>
      <h1>Django Projects</h1>
      <div className="projects__django">
        <Project image={taskManagerData.image} name={taskManagerData.name} description={taskManagerData.desc} url={taskManagerData.url}/>
        <Project image={courseTrackerData.image} name={courseTrackerData.name} description={courseTrackerData.desc} url={courseTrackerData.url}/>
      </div>
    </div>
  )
}

export default Projects;
