import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
  } from "recharts";

export function Chart({fetchData}) {
  function dataChange(){
    return fetchData?.chartData.map(({date})=>date.split('-').reverse().join('/').slice(-10,-5))
      }
    return (
    <AreaChart
      width={903} height={248} 
      data={fetchData?.chartData}
      margin={{
        top: 0,
        right: 24,
        left: 25,
        bottom: 20,
      }}
    >
      <defs>
        <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
          <stop
            offset="0%"
            stopColor="rgba(27, 186, 100)"
            stopOpacity={3.4}
          />
          <stop
            offset="74%"
            stopColor="rgba(27, 186, 100)"
            stopOpacity={0.05}
          />
        </linearGradient>
      </defs>
      <defs>
        <linearGradient id="colorPink" x1="0" y1="0" x2="0" y2="1">
          <stop
            offset="0%"
            stopColor="rgba(197, 45, 129)"
            stopOpacity={3.4}
          />
          <stop
            offset="75%"
            stopColor="rgba(197, 45, 129)"
            stopOpacity={0.05}
          />
        </linearGradient>
      </defs>
      <defs>
        <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
          <stop
            offset="0%"
            stopColor="rgba(15, 129, 206)"
            stopOpacity={3.4}
          />
          <stop
            offset="75%"
            stopColor="rgba(15, 129, 206)"
            stopOpacity={0.05}
          />
        </linearGradient>
      </defs>
      <XAxis
        dy={17}
        tick={{
          display:'flex',
          gap:'40px',
          fill: "rgba(255, 255, 255, 0.60)",
          fontSize: "11px",
          lineHeight: "12px",
        }}
        dataKey={dataChange}
      />
      <YAxis
        dx={-21}
        tick={{
          fill: "rgba(255, 255, 255, 0.60)",
          fontSize: "11px",
          lineHeight: "12px",
        }}
        dataKey='blue'
      />
      <Area
       isAnimationActive={false}
        dot={{ stroke: "#3CDC86", strokeWidth: 5 }}
        type="bump"
        dataKey="green"
        stackId="0"
        stroke="#3CDC86"
        fill="url(#colorGreen)"
      />
      <Area
        isAnimationActive={false}
        dot={{ stroke: "#C52D81", strokeWidth: 5 }}
        type="bump"
        dataKey="red"
        stackId="1"
        stroke="#C52D81"
        fill="url(#colorPink)"
      />
      <Area
        isAnimationActive={false}
        dot={{ stroke: "#0F81CE", strokeWidth: 5 }}
        type="bump"
        dataKey="blue"
        stackId="2"
        stroke="#0F81CE"
        fill="url(#colorBlue)"
      />

      <CartesianGrid opacity={0.1}/>
    </AreaChart>
  )
}