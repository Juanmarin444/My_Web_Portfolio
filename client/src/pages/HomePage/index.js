import hero from '../../images/heroLinear.svg';
import avatar from '../../images/myAvatar.svg';
import subLogo from '../../images/subLogo.svg';
import './styles.css';


const HomePage = () => {

  return (
    <div className='homepage'>
      <div className='homepage__overlay'>
        <h2>Hello, I'm</h2>
        <img src={subLogo} alt="{jm: juanmarin}" width="2873" height="100"/>
        <h2>AND THIS IS MY PORTFOLIO</h2>
      </div>
      <div className="homepage__avatar">
        <img src={avatar} alt="An avatar of me" width="300" height="300"/>
      </div>
      <div className="homepage__hero">
        <img src={hero} alt="A desk icon" width="1100" height="440"/>
      </div>
    </div>
  )
}

export default HomePage;
