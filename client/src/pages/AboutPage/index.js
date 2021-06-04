import './styles.css';
import skillsGraph from '../../images/skillsGraph.jpg';
import monkeyCartoon from '../../images/monkeyCartoon.png';

const AboutPage = () => {
  return (
    <div className="aboutpage">
      <div className="aboutpage__info">
        <h1>WHO IS THIS GUY?</h1>
        <h3>If you're looking for an inquisitive mind, someone who tackles problems with a positive attitude and focuses on the larger aspect of things, you've come to the perfect location.</h3>
        <p>Initially, I intended to become an Engineer. I tested the waters ranging from Mechanical to Civil Engineering but something never felt quite right. As a child, I was usually found deconstructing my toys and learning all about how the manufacturers solved simple problems. Amazingly, some things never changed, I have been very fortunate to continue to do what I’ve always loved, only now through programming!</p>
        <p>I first discovered coding back in high school, I was assigned the task to build and program an autonomous robot in engineering 3; Little did I know that those simple conditional statements would draw me in once again upon discovering JavaScript algorithms and later Python web frameworks such as Django and Flask. My current goal is to apply what I have learned throughout the years to build beautiful websites for clients alongside an amazing team and to continue to learn and gain experience. I want to contribute to making the internet an amazing world to look at and explore. Hopefully, our paths can cross one day and we can make that world a fantastic place together.</p>
      </div>
      <div className="aboutpage__myskills">
        <img src={skillsGraph} alt="My Skills Graph" />
        <p>* Self-appointed</p>
      </div>
      <div className="aboutpage__facts">
        <div className="facts__monkey">
          <img src={monkeyCartoon} alt="A monkey icon" />
        </div>
        <div className="facts__list">
          <h1>Random fun facts</h1>
          <p>I can bake pizza</p>
          <p>I like watching cartoons</p>
          <p>I think paleontology is interesting</p>
          <p>I play guitar and piano</p>
          <p>I like making blueprints</p>
          <p>I think raccoons are cute</p>
          <p>I prefer colder weather</p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage;
