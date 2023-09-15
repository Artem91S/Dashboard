import {
  LineChartContainer,
  Block,
  FlexChart,
} from "./lineChart.styled.js";
import { Chart } from "./LineChart";
import { HeaderChart } from "./HeaderLineChart";
import { InfoBlock } from "./InfoBlock";
import { useGetData } from "../../../../../hooks/useGetData.jsx";

export function LineChart() {
   const { data } = useGetData();
  return (
    <LineChartContainer>
      <HeaderChart />
      <FlexChart>
        <Block>
          <Chart fetchData={data} />
          <InfoBlock fetchData={data} />
        </Block>
      </FlexChart>
    </LineChartContainer>
  );
}
