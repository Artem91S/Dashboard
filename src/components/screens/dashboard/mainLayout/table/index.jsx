import { useState } from "react";
import { DropDown } from "../../../../icons/DropDown";
import { DropUp } from "../../../../icons/DropUp";
import { Info } from "../../../../icons/Info";
import { TableSettings } from "../../../../icons/TableSettings";
import {
  Container,
  FlexBox,
  TitleBox,
  Title,
  SettingsFlex,
  ListTitle,
  Wrapper
} from "./table.styled.js";
import { DropDownMenu } from "./TableDropDown";
import { TableLayout } from "./TableLayout";

export function Table() {
const [showItem,setShowItem] = useState(false);
  return (
    <Container>
      <FlexBox>
        <TitleBox>
          <Title>General Sales / Time</Title>
          <Info />
        </TitleBox>
        <SettingsFlex>
          <TableSettings 
          stroke={showItem ?'#76B2EA' : "#FFF"}
          />
          <Wrapper
           onClick={()=>setShowItem(!showItem)}
         >
            <ListTitle
            
             color={showItem ?'#76B2EA' : "#FFF"}
            >Table settings</ListTitle>
            {showItem ? <DropUp/>: <DropDown 
            />}
          </Wrapper>
          {showItem && <DropDownMenu showItem={showItem} setShowItem={setShowItem} />}
        </SettingsFlex>
      </FlexBox>
      <TableLayout />
    </Container>
  );
}
