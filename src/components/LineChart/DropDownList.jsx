import { listItems } from "./listItems";
import {
  DotBorder,
  DotCenter,
  ListContainer,
  ListItem,
} from "../../styled/LineChart/DropDownList.styled";

export function DropDownList({ showList, item, setItem }) {
  return (
    <ListContainer
    width="292px"
    $right="36px"
    $top="48px"
    $padding="8px"
    display={showList ? "flex" : "none"}>
      {listItems.map((items) => (
        <ListItem
          key={items.id}
          onClick={() => setItem(items.content)}
        >
          <DotBorder
            $border={
              item === items.content
                ? "1px solid #8941FF "
                : "1px solid #60677A "
            }
          >
            <DotCenter
              $background={item === items.content ? " #8941FF " : "transparent "}
            />
          </DotBorder>
          {items.content}
        </ListItem>
      ))}
    </ListContainer>
      );
}
