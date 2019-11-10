import React from 'react';

import { slide as Menu } from 'react-burger-menu';

export default props => {

  return (
    <Menu>
      <a className="menu-item" href="/CrewDetails" >
       CrewDetails
      </a>
 
      <a className="menu-item" href="/CrewRoster">
        CrewRoster
      </a>
      <a className="menu-item" href="/CrewRequest">
        CrewRequest
      </a>
      <a className="menu-item" href="/MovementTracker">
        MovementTracker
      </a>
      <a className="menu-item" href="/Weather">
        Weather
      </a>
      <a className="menu-item" href="/Settings">
        Settings
      </a>
      <a className="menu-item" href="/Feedback/Rating">
        Feedback/Rating
      </a>
      <a className="menu-item" href="/TermsAndConditionsr">
        TermsAndConditions
      </a>
    </Menu>
  );

};

 