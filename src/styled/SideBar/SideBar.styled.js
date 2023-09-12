import styled from 'styled-components';
import { Main } from '../../icons/SideBar';
import { Box } from '../../icons/Box';
import { More } from '../../icons/More';
import { Game } from "../../icons/Game";
import { Settings } from "../../icons/Settings";
import { Favorite } from "../../icons/Favorite";

export const SideBarContainer=styled.div`
      background:#242731;
      position:absolute;
      top:0;
      left:0;
      box-sizing:border-box;
      display:flex;
      flex-flow:column;
      align-items:center;
      padding:14px 18px 592px 18px;
      gap:46px;
`;

export const IconsFlex=styled.div`
      display:flex;
      flex-flow:column;
      gap:17px;
`

export const MainStyled =styled(Main)`
stroke:#7D869E;
`;
export const BoxStyled =styled(Box)`
stroke:#7D869E;
`;
export const MoreStyled =styled(More)`
stroke:#7D869E;
`;
export const GameStyled =styled(Game)`
stroke:#7D869E;
`;
export const SettingsStyled =styled(Settings)`
stroke:#7D869E;
`;
export const FavoriteStyled =styled(Favorite)`
stroke:#7D869E;
`;
export const IconContainer = styled.div`
  padding: 12px;
  background: #191c23;
  border-radius: 40px;
  cursor:pointer;
  &:hover {
    background: #8941FF;
     ${MainStyled} {
      stroke:#FFF;
    } 
    ${BoxStyled} {
      stroke:#FFF;
    } 
    ${MoreStyled} {
      stroke:#FFF;
    } 
    ${GameStyled} {
      stroke:#FFF;
    } 
    ${SettingsStyled} {
      stroke:#FFF;
    } 
    ${FavoriteStyled} {
      stroke:#FFF;
    }
  }  
`;