import {
  HeaderContainer,
    Title,
    HeaderFlex,
    TypeBlock,
    TypeList,
    Description,
  } from "./piaChart.styled.js";
  import { DropDown } from "../../../../icons/DropDown";
  import { DropUp } from "../../../../icons/DropUp";
  import { useState } from "react";
  import { DropDownList } from "./DropDownMenu";
  
  export function Header({ showList, setShowList }) {
    const [item, setItem] = useState("Naperville");
    return (
      <HeaderContainer>
        <Title>Game Stats</Title>
        <HeaderFlex>
          <Description>Location</Description>
          <TypeBlock onClick={() => setShowList(!showList)}>
            <TypeList color={showList ? "#81C2FF" : "#FFF"}>{item}</TypeList>
            {showList ? <DropUp /> : <DropDown />}
          </TypeBlock>
          <DropDownList item={item} setItem={setItem} showList={showList} />
        </HeaderFlex>
      </HeaderContainer>
    );
  }
  