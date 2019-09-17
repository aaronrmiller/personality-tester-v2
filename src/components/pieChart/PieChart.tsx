import * as React from 'react';
import { useRef, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { animationDuration, animationConfig } from './animationConfig';
import * as d3 from 'd3';
import Arc from './Arc';


// creates a set of colors based on the chosen set
const colorScheme = d3.schemeSet2;
// creates ordered scale using defined set of colors
const colors = d3.scaleOrdinal(colorScheme);
// number formatting
const format = d3.format('.2f');


interface IProps {

}

const PieChart: React.FC<IProps> = ({ innerRadius, outerRadius, incomingData, width, height }) => {
    const ref = useRef([]);
    const pieChart = d3
      .pie()
      .value(d => d.value)
      .sort(null);
    const arc = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
    const data = pieChart(incomingData);
    const previousData = pieChart(ref.current);
    const [animatedProps, setAnimatedProps] = useSpring(() => animationConfig);
    setAnimatedProps(animationConfig)

    useEffect(() => {
      ref.current = incomingData
    });

    return (
      <svg width={width} height={height}>
        <g transform={`translate(${outerRadius}, ${outerRadius})`}>
          {data.map((d, i) => (
            <Arc
            key={i}
            index={i}
            from={previousData}
            to={d}
            createArc={arc}
            colors={colors}
            format={format}
            animatedProps={animatedProps}
            />
          ))}
        </g>
      </svg>
    );
}

export default PieChart;