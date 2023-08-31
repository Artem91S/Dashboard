import { useContext } from "react";
import {
  IconContainerUser,
  FlexContainer,
  UserContainer,
  StatisticStyle,
  Wrapper,
  UserDescription,
} from "../../styled/User/Users.styled";
import { DataContext } from "../../Hooks/Context";


export function Users({ data }) {
  const fetchData = useContext(DataContext);
  return (
    <FlexContainer>
      {data.map((user) => (
        <UserContainer key={user.id}>
          <IconContainerUser $background={user.bg}>
            {user.icon}
          </IconContainerUser>
          <Wrapper>
            {fetchData &&
              Object.values(fetchData?.statistic)
                .reverse()
                .map((elem, index) => (
                  <StatisticStyle
                  key={Math.random()}
                  >
                    {user.id === index + 1 && elem}
                  </StatisticStyle>
                ))}
            <UserDescription>{user.text}</UserDescription>
          </Wrapper>
        </UserContainer>
      ))}
    </FlexContainer>
  );
}
