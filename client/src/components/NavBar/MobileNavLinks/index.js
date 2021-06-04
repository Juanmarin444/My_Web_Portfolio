import { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuToggle from './MenuToggle';

import './styles.css';

const MobileNavLinks = () => {

  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="nav-links-container-r">
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)}  />
      {isOpen && <ul className="links-wrapper-r">
        <li className="link-item-r">
          <Link to="/" onClick={() => setOpen(!isOpen)} >home</Link>
        </li>
        <li className="link-item-r">
          <Link to="/projects" onClick={() => setOpen(!isOpen)} >projects</Link>
        </li>
        <li className="link-item-r">
          <Link to="/about" onClick={() => setOpen(!isOpen)} >about me</Link>
        </li>
        <li className="link-item-r">
          <Link to="/contact" onClick={() => setOpen(!isOpen)} >get in touch</Link>
        </li>
      </ul>}
    </nav>
  )
}

export default MobileNavLinks;
