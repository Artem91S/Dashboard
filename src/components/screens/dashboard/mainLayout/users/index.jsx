import { useGetData } from "../../../../../hooks/useGetData";
import {
  IconContainerUser,
  FlexContainer,
  UserContainer,
  StatisticStyle,
  Wrapper,
  UserDescription,
} from "./users.styled.js";

export function Users({ userData }) {
const {data} =useGetData()
  return (
    <FlexContainer>
      {userData.map((user) => (
        <UserContainer key={user.id}>
          <IconContainerUser $background={user.bg}>
            {user.icon}
          </IconContainerUser>
          <Wrapper>
            <StatisticStyle>{user.info}</StatisticStyle>
            <UserDescription>{user.text}</UserDescription>
          </Wrapper>
        </UserContainer>
      ))}
    </FlexContainer>
  );
}
