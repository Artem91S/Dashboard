import { Flex,Title,Description } from "../../styled/LineChart/InfoBlock.styled";

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
