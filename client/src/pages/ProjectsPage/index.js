import './styles.css';
import Project from './Project';
import {
  taskManagerData,
  courseTrackerData,
  worldClockData,
  weatherAppData,
  smartShopData
} from './projectsData';

const Projects = () => {

  return (
    <div className="projects">
      <h1>MERN Projects</h1>
      <div className="projects__type">
        <Project image={smartShopData.image} name={smartShopData.name} description={smartShopData.desc} url={smartShopData.url}/>
      </div>
      <h1>Django Projects</h1>
      <div className="projects__type">
        <Project image={taskManagerData.image} name={taskManagerData.name} description={taskManagerData.desc} url={taskManagerData.url}/>
        <Project image={courseTrackerData.image} name={courseTrackerData.name} description={courseTrackerData.desc} url={courseTrackerData.url}/>
      </div>
      <h1>React Projects (PWA)</h1>
      <div className="projects__type">
        <Project image={worldClockData.image} name={worldClockData.name} description={worldClockData.desc} url={worldClockData.url} />
        <Project image={weatherAppData.image} name={weatherAppData.name} description={weatherAppData.desc} url={weatherAppData.url} />
      </div>
    </div>
  )
}

export default Projects;
