import './styles.css';

import Logo from './Logo';

import NavLinks from './NavLinks';
import MobileNavLinks from './MobileNavLinks';

import { useMediaQuery } from 'react-responsive';
import { DeviceSize } from '../responsive/index.js';

const NavBar = () => {

  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile})

  return (
    <header>
      <div className="container container-flex">
        <div className="left-section">
          <Logo />
        </div>
        <div className="right-section">
          {!isMobile && <NavLinks />}
          {isMobile && <MobileNavLinks />}
        </div>
      </div>
    </header>
  )
}

export default NavBar;
