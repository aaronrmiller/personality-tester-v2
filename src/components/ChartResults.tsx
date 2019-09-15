import * as React from 'react'
import d3 from 'd3';
import PieChart from './pieChart/PieChart';

interface IProps {

}
const data = [
  {
    trait: 'o',
    value: 2,
  },
  {
    trait: 'c',
    value: 5,
  },
  {
    trait: 'e',
    value: 12,
  },
  {
    trait: 'a',
    value: 10,
  },
  {
    trait: 'n',
    value: 5,
  },
]

const ChartResults: React.FC<IProps> = () => {

    return (
    <>
      <h1>Hello</h1>
      <PieChart 
        incomingData={data}
        width={200}
        height={200}
        innerRadius={50}
        outerRadius={100}
      />
    </>
    );
}

export default ChartResults;
