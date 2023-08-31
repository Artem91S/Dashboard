import {
  Container,
  Title,
  FlexBlock,
  TypeBlock,
  TypeList,
  Description,
} from "../../styled/PiaChart/Header.styled";
import { DropDown } from "../../icons/DropDown";
import { DropUp } from "../../icons/DropUp";
import { useState } from "react";
import { DropDownList } from "./DropDownList";

export function Header({ showList, setShowList }) {
  const [item, setItem] = useState("Charlottetown");
  return (
    <Container>
      <Title>Game Stats</Title>
      <FlexBlock>
        <Description>Location</Description>
        <TypeBlock onClick={() => setShowList(!showList)}>
          <TypeList color={showList ? "#81C2FF" : "#FFF"}>{item}</TypeList>
          {showList ? <DropUp /> : <DropDown />}
        </TypeBlock>
        <DropDownList item={item} setItem={setItem} showList={showList} />
      </FlexBlock>
    </Container>
  );
}
