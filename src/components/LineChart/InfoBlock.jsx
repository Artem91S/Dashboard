import { colors } from "./data.js";
import { Rating } from "./Rating.jsx";
import { UserList } from "./UsersList";
import { Square } from "../../icons/Square/index.jsx";
import {
  FlexBlock,
  SquareFlex,
  Container,
  ContainerBlock
} from "../../styled/LineChart/InfoBlock.styled";

export function InfoBlock({ fetchData }) {
  return (
    <ContainerBlock>
      <Container>
        <SquareFlex>
          {colors.map((colors) => (
            <Square key={colors.id} fill={colors.fill} stroke={colors.stroke} />
          ))}
        </SquareFlex>
        <FlexBlock>
          {colors.map((rating) => (
            <Rating key={rating.id} title={rating.text} date={rating.sales} />
          ))}
        </FlexBlock>
      </Container>
      <FlexBlock>
        {fetchData?.users?.map((user) => (
          <UserList 
          key={Math.random()}
          title={user.name} date={user.date} />
        ))}
      </FlexBlock>
    </ContainerBlock>
  );
}
