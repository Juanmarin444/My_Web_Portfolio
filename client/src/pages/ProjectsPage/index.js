import './styles.css';
import Project from './Project';
import {
  taskManagerData,
  courseTrackerData,
  worldClockData,
  weatherAppData,
  smartShopData,
  javascriptArcadeData
} from './projectsData';

const Projects = () => {

  return (
    <div className="projects">
      <h1>JavaScript Projects</h1>
      <div className="projects__type">
        <Project image={javascriptArcadeData.image} name={javascriptArcadeData.name} description={javascriptArcadeData.desc} url={javascriptArcadeData.url} github={javascriptArcadeData.gitUrl}/>
        <Project image={smartShopData.image} name={smartShopData.name} description={smartShopData.desc} url={smartShopData.url} github={smartShopData.gitUrl}/>
        <Project image={worldClockData.image} name={worldClockData.name} description={worldClockData.desc} url={worldClockData.url} github={worldClockData.gitUrl}/>
        <Project image={weatherAppData.image} name={weatherAppData.name} description={weatherAppData.desc} url={weatherAppData.url} github={weatherAppData.gitUrl}/>
      </div>
      <h1>Python Projects</h1>
      <div className="projects__type">
        <Project image={taskManagerData.image} name={taskManagerData.name} description={taskManagerData.desc} url={taskManagerData.url} github={taskManagerData.gitUrl}/>
        <Project image={courseTrackerData.image} name={courseTrackerData.name} description={courseTrackerData.desc} url={courseTrackerData.url} github={courseTrackerData.gitUrl}/>
      </div>
    </div>
  )
}

export default Projects;
