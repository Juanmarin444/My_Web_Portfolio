import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const NavLinks = () => {
  return (
    <nav className="nav-list">
      <ul className="links-wrapper">
        <li className="link-item">
          <Link className="link" to="/">HOME</Link>
        </li>
        <li className="link-item">
          <Link className="link" to="/projects">PROJECTS</Link>
        </li>
        <li className="link-item">
          <Link className="link" to="/about">ABOUT ME</Link>
        </li>
        <li className="link-item">
          <Link className="link" to="/contact">GET IN TOUCH</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavLinks;
