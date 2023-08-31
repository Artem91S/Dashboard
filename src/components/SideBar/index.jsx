import { MainLogo } from "../../icons/MainLogo";
import { menuIcons } from "./data.js";
import { SideBarContainer,IconsFlex,IconContainer } from "../../styled/SideBar/SideBar.styled";

export function SideBar() {
  return (
    <SideBarContainer>
      <MainLogo />
      <IconsFlex>
        {menuIcons.map(icons=>(
          <IconContainer
          key={icons.id}
          >
            {icons.icon}
          </IconContainer>
        ))}
      </IconsFlex>
    </SideBarContainer>
  );
}
