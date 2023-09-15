import { Flex,Title,Description } from "./lineChart.styled.js";

export function Rating({ title, date }) {
  return (
      <Flex>
        <Title >
          {title}
        </Title>
        <Description >
          {date}
        </Description>
      </Flex>
  );
}
