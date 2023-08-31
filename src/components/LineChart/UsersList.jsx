import { Flex,Title,Description} from "../../styled/LineChart/InfoBlock.styled";

export function UserList({title,date}){
   return( 
   <Flex>
    <Title>{title}</Title>
    <Description >
      {date}
    </Description>
  </Flex>)
}