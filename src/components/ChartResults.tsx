import React, { useContext } from 'react'
import d3 from 'd3';
import PieChart from './pieChart/PieChart';
import { stateContext } from '../hooks/context';

interface IProps {

}

const ChartResults: React.FC<IProps> = () => {
  const { userData } = useContext(stateContext)
    return (
    <>
      <PieChart 
        incomingData={userData}
        width={200}
        height={200}
        innerRadius={50}
        outerRadius={100}
      />
    </>
    );
}

export default ChartResults;

// const data = [
//   {
//     // trait: 'o',
//     value: 2,
//   },
//   {
//     // trait: 'c',
//     value: 5,
//   },
//   {
//     // trait: 'e',
//     value: 12,
//   },
//   {
//     // trait: 'a',
//     value: 10,
//   },
//   {
//     // trait: 'n',
//     value: 5,
//   },
// ]