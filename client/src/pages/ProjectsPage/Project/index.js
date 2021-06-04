import './styles.css';


const Project = ({image, name, description, url}) => {
  return (
    <div className="project">
      <img src={image} alt="project name"/>
      <div className="project__info">
        <p className="info__name">{name}</p>
        <p className="info__description">{description}</p>
        <a href={url} className="info__button">Visit</a>
      </div>
    </div>
  );
}

export default Project;
