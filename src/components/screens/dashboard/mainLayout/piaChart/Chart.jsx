import { PieChart, Pie, Sector, Tooltip } from "recharts";
import { data } from "./piaChartData.js";

function renderActiveShape ({
  cx,
  cy,
  innerRadius,
  outerRadius,
  startAngle,
  endAngle,
  fill,
  payload,

}) {
  
  return (
    <>
      <text x={115} y={114} dy={-56.5} fontSize={12} 
      style={{textTransform:'uppercase'}} textAnchor="middle" fill='#FFF'>
        {payload.title}
      </text>
      <text x={cx} y={cy} dy={7} fontSize={64} textAnchor="middle" fill='#FFF'>
        {payload.proc}
      </text>
      <text x={113} y={cy} dy={35} fontSize={12} textAnchor="middle" fill='#FFF'>
      {payload.text}
      </text>
      <text x={113} y={116} dy={49.5}
      fontSize={12}
      textAnchor="middle" fill='#FFF'>
      {payload.description}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        cornerRadius={30}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </>
  );
};

export  function Chart() {
  return (
          <PieChart width={232} height={232}>
          <Tooltip
          active={false}
          itemStyle={{display:'none',backgroundColor:'transparent'}}
          labelStyle={{display:'none'}}
          label={0}
          contentStyle={{backgroundColor:'none',border:'none'}}
          /> 
          <Pie
           stroke="none"
          margin={{
            top: 16,
            right: 21,
            left: 32,
            bottom: 32,
          }}
            dataKey="value"
            activeIndex={0}
            activeShape={renderActiveShape}
            data={data}
            cx={110}
            cy={110}
            startAngle={-105}
            endAngle={500}
            cornerRadius={30}
            innerRadius={95}
            outerRadius={115}
            paddingAngle={3}          
          />
        </PieChart>
  )
}
