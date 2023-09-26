import { colors } from "./lineChartData.js";
import { Rating } from "./Rating";
import { UserList } from "./ListUsers";
import { Squares } from "./Squares";
import {
  FlexBlock,
  SquareFlex,
  Container,
  ContainerBlock
} from "./lineChart.styled.js";

export function InfoBlock({ fetchData }) {
  return (
    <ContainerBlock>
      <Container>
        <SquareFlex>
          {colors.map((colors) => (
            <Squares key={colors.id} fill={colors.fill} stroke={colors.stroke} />
          ))}
        </SquareFlex>
        <FlexBlock>
          {colors.map((rating) => (
            <Rating key={rating.id} title={rating.text} date={rating.sales} />
          ))}
        </FlexBlock>
      </Container>
      <FlexBlock>
        {fetchData.map((user) => (
          <UserList 
          key={Math.random()}
          title={user.name} date={user.date} />
        ))}
      </FlexBlock>
    </ContainerBlock>
  );
}