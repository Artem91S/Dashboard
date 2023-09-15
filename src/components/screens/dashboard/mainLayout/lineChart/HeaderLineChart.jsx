import { useState } from "react";
import {
  HeaderChartContainer,
  HeaderTitle,
  HeaderTypes,
  TypeTitle,
  TypesDropDown,
  DropDownText,
} from "./lineChart.styled.js";
import { DropDown } from "../../../../icons/DropDown";
import { DropUp } from "../../../../icons/DropUp";
import { DropDownList } from "./DropDownMenu";

export function HeaderChart() {
  const [showList, setShowList] = useState(false);
  const [item, setItem] = useState("Graph");
  return (
    <HeaderChartContainer>
      <HeaderTitle>
        Game Stats
      </HeaderTitle>
      <HeaderTypes>
        <TypeTitle>Data type</TypeTitle>
        <TypesDropDown onClick={() => setShowList(!showList)}>
          <DropDownText color={showList ? "#76B2EA" : "#fff"}>
            {item}
          </DropDownText>
          {showList ? <DropUp /> : <DropDown />}
        </TypesDropDown>
        <DropDownList item={item} setItem={setItem} showList={showList} />
      </HeaderTypes>
    </HeaderChartContainer>
  );
}
