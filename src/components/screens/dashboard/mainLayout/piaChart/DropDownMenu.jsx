import { ListItem } from "./piaChart.styled.js";
import {  ListContainer } from "../lineChart/lineChart.styled.js";
import { Checked } from "../../../../icons/Checked";
import { dropMenu } from "./piaChartData.js";

export function DropDownList({ showList,item, setItem }) {
  return (
    <ListContainer
      width="237px"
      $right="32px"
      $top="48px"
      $padding="8px"
      display={showList ? "flex" : "none"}
    >
      {dropMenu.map((items) => (
        <ListItem
          key={items.id}
          $backgroundHover="#31343D"
          onClick={() => setItem(items.content)}
        >
          {items.content}
          {item === items.content && <Checked />}
        </ListItem>
      ))}
    </ListContainer>
  );
}