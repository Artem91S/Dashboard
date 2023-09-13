import { ListItem } from "../../styled/PiaChart/DropDownList.styled";
import {  ListContainer } from "../../styled/LineChart/DropDownList.styled";
import { Checked } from "../../icons/Checked";
import { dropMenu } from "./dropMenu";

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
