import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Zoom from '@material-ui/core/Zoom';

const Header = (props) => {
  return (
      <div>
<Zoom in={true} style={{ transitionDelay: 800 }}>
      <h1 className="header__text"><LinearProgress color="secondary" />| The ~x Cook x~  Bhook |
     </h1></Zoom>
      </div>
  )
}

export default Header;
