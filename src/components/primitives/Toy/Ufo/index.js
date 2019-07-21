import React from 'react'
import svg from  '../../../../images/navicella-02.svg';
import { Tween, Timeline } from 'react-gsap';

const Ufo = props => (
    <Timeline
      target={<img src={svg} className={'toy'} height={400} width={400} />}>
      <Tween staggerFrom={{ scale: 0, opacity:0, }} staggerTo={{ scale: 1, opacity:1}} duration={2.7}  />
      <Tween staggerFrom={{ y:0 }} staggerTo={{ y:300 }} duration={2.7} position="+=1"  />
    </Timeline>
)


export default Ufo