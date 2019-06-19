import React from 'react';
import { Icon } from "../../primitives"

const Chariteat = () => {
  return (
    <div className={'project'}>
      <img src="/images/chariteat.svg" />
      <p>
        Chariteat is a site that allows users to book in restaurants and donate
        a portion of the charity account to charity and volunteer associations.
      </p>
      <p>
        I managed the server side of the project, integrating the bees with the side
        frontend and creating an administrative management panel.
      </p>
      <div className={'links'}>
        <a className="button is-outlined is-rounded">
          <Icon name={'External'} size={'20'}/>
        </a>
        <a className="button is-outlined">
          <Icon name={'GitHub'} size={'20'}/>
        </a>
      </div>
    </div>
  )
}

export default Chariteat