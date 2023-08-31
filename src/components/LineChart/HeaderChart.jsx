import { useState } from "react";
import {
  Container,
  HeaderTitle,
  HeaderTypes,
  TypeTitle,
  TypesDropDown,
  DropDownText,
} from "../../styled/LineChart/HeaderChart.styled";
import { DropDown } from "../../icons/DropDown/index.jsx";
import { DropUp } from "../../icons/DropUp";
import { DropDownList } from "./DropDownList";

export function HeaderChart() {
  const [showList, setShowList] = useState(false);
  const [item, setItem] = useState("Diagrams");
  return (
    <Container>
      <HeaderTitle>
        Game Stats
      </HeaderTitle>
      <HeaderTypes>
        <TypeTitle>Data type</TypeTitle>
        <TypesDropDown
          onClick={() => setShowList(!showList)}
        >
          <DropDownText color={showList ? "#76B2EA" : "#fff"}>
            {item}
          </DropDownText>
          {showList ? <DropUp /> : <DropDown />}
        </TypesDropDown>
        <DropDownList item={item} setItem={setItem} showList={showList} />
      </HeaderTypes>
    </Container>
  );
}
