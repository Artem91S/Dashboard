import { UserIcon } from "../../icons/User";
import {
  UserIconContainer,
  HeaderContainer,
  HeaderBlock,
  HeaderTitle,
  UserContainer,
  UserName,
} from "../../styled/Header/Header.styled";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderBlock>
        <HeaderTitle>Dashboard</HeaderTitle>
      </HeaderBlock>
      <UserContainer>
        <UserIconContainer>
          <UserIcon />
        </UserIconContainer>
        <UserName>Username</UserName>
      </UserContainer>
    </HeaderContainer>
  );
}
