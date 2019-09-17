import * as d3 from 'd3';
import * as React from 'react'
import { IDataTrait } from '../../hooks/useReducer'
import { animated } from 'react-spring';
import { color } from 'd3';


// index number from object to object createArc function colors function format function animatedProp object

// to object {data: {…}, index: 3, value: 0, startAngle: 6.283185307179586, endAngle: 6.283185307179586, …}
interface IFromUnit {
  data: IDataTrait;
  endAngle: number;
  index: number;
  padAngle: number;
  startAngle: number;
  value: number;
}
interface IFrom {
  from: IFromUnit[];
}
// TODO: complete typescript implementation
interface IProps {
  index: number;
  from: IFrom;
  //to:
  // createArc: () =>
  // colors: () =>
  // format: () =>
  // animatedProp:
}

const Arc: React.FC<IProps> = ({ index, from, to, createArc, colors, format, animatedProps }) => {
  const interpolator = d3.interpolate(from, to);
  console.log( 'from', typeof from, from, 'to', typeof to, to, 'createArc', typeof createArc, createArc, 'colors', typeof color, color, 'format', typeof format, format, 'animatedProp', typeof animatedProps, animatedProps)
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