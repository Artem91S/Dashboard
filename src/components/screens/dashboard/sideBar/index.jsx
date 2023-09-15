import { MainLogo } from "../../../icons/MainLogo";
import { menuIcons } from "./sideBarData.js";
import { SideBarContainer,IconsFlex,IconContainer } from "./sideBar.styled";

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