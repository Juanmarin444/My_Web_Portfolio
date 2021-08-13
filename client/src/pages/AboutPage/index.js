import './styles.css';
// import skillsGraph from '../../images/skillsGraph.jpg';
// import hero from '../../images/heroLinear.svg';
import monkeyCartoon from '../../images/monkeyCartoon.png';

const AboutPage = () => {
  return (
    <div className="aboutpage">
      <div className="aboutpage__info">
        <h1>WHO IS THIS GUY?</h1>
        <h3>If you're searching for someone with a curious mind, someone who approaches difficulties with a positive attitude and considers the big picture, you've come to the right spot.</h3>
        <p>Since high school, I have wanted to pursue engineering. I experimented with a variety of engineering fields, from mechanical to civil. However, nothing felt quite right. As a child, I loved disassembling my toys so that I could figure out how to put them together again. Fortunately, things haven't changed because I continue to do what I love, only now through programming!</p>
        <p>I first discovered coding back in high school when I was assigned to build and program an autonomous robot. Little did I know, those simple conditional statements would draw me in once again upon discovering JavaScript algorithms and later Python web frameworks such as Django and Flask. My goal is to build fantastic websites along with a tenacious team and continue learning and gaining experience. I want to contribute toward shaping the internet into a marvelous world to look at and explore. Hopefully, our paths can cross one day, and we can make that world an incredible place together.</p>
      </div>
      {/* <div className="aboutpage__myskills">
        <img src={skillsGraph} alt="My Skills Graph" />
        <p>* Self-appointed</p>
      </div> */}
      {/* <div className="homepage__hero">
        <img src={hero} alt="A desk icon" width="1100" height="440"/>
      </div> */}
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
