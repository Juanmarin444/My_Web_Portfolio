import './styles.css';


const Project = ({image, name, description, url, github}) => {
  return (
    <div className="project">
      <img src={image} alt="project name"/>
      <div className="project__info">
        <p className="info__name">{name}</p>
        <p className="info__description">{description}</p>
        <div className="info__buttons">
          <a href={url} className="info__button" target="_blank" rel="noreferrer">Website</a>
          <a href={github} className="info__button" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </div>
  );
}

export default Project;
