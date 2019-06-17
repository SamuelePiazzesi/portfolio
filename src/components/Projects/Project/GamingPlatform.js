import React from 'react';
import { Icon } from "../../primitives"

const GamingPlatform = () => {
  return (
    <div className={'project'}>
      <img src="/images/gp-logo.png" />
        <p>
          Gaming Platform is the gamification engagement platform
          of Friendz which aims to increase the brand's social fanbase
          and the engagement of the same.
          It is a platform in which users are paid to carry
          at the end preparatory actions to the objectives of social engagement e
          follower acquisition.
        </p>
        <p>
          My task was to create the frontend and backend environment,
          especially the server and database management and calls to the
          Instagram API.
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

export default GamingPlatform