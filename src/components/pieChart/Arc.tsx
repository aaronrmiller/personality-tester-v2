import * as d3 from 'd3';
import * as React from 'react'

import { animated } from 'react-spring';




interface IProps {

}

const Arc: React.FC<IProps> = ({ index, from, to, createArc, colors, format, animatedProps }) => {
  const interpolator = d3.interpolate(from, to);

  return (
    <g key={index} className="arc">
      <animated.path 
      className="arc"
      d={animatedProps.t.interpolate(t => createArc(interpolator(t)))}
      fill={colors(index)}
      />
      <animated.text
      transform={animatedProps.t.interpolate(
        t => `translate(${createArc.centroid(interpolator(t))})`
      )}
      textAnchor="middle"
      alignmentBaseline="middle"
      fill="white"
      fontSize="10"
      >
      {animatedProps.t.interpolate(t => format(interpolator(t).value))}
      </animated.text>
    </g>    
    );
}

export default Arc;