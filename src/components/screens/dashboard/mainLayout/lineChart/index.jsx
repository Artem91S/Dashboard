import {
  LineChartContainer,
  Block,
  FlexChart,
} from "./lineChart.styled.js";
import { Chart } from "./LineChart";
import { HeaderChart } from "./HeaderLineChart";
import { InfoBlock } from "./InfoBlock";
import { useGetData } from "../../../../../hooks/useGetData.jsx";
import { LineChartData,DataLineChart } from "./lineChartData.js";
export function LineChart() {
   const { data } = useGetData();
  return (
    <LineChartContainer> 
      <HeaderChart />
      <FlexChart>
        <Block>
          <Chart fetchData={DataLineChart} />
          <InfoBlock fetchData={LineChartData} />
        </Block>
      </FlexChart>
    </LineChartContainer>
  );
}
