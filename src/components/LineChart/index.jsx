import { useContext } from "react";
import { DataContext } from "../../Hooks/Context";

import {
  Container,
  Block,
  Flex,
} from "../../styled/LineChart/LineChart.styled";
import { Chart } from "./Chart.jsx";
import { HeaderChart } from "./HeaderChart.jsx";
import { InfoBlock } from "./InfoBlock";

export function LineChart() {
  const fetchData = useContext(DataContext);
  return (
    <Container>
      <HeaderChart />
      <Flex>
        <Block>
          <Chart fetchData={fetchData} />
          <InfoBlock fetchData={fetchData} />
        </Block>
      </Flex>
    </Container>
  );
}
