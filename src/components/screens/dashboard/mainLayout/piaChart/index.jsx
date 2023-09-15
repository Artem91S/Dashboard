import { useState } from "react";
import {
  Container,
  FlexBlock,
} from "./piaChart.styled.js";
import { Chart } from "./Chart";
import { Header } from "./Header";
import { ListItems } from "./ListItems";


export function PieChartBoard() {
  const [showList, setShowList] = useState(false);
  return (
    <Container>
      <Header setShowList={setShowList} showList={showList} />
      <FlexBlock>
        <Chart />
        <ListItems />
      </FlexBlock>
    </Container>
  );
}
