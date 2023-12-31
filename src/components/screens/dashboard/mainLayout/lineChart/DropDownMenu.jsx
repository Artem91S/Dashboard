import { listItems } from "./lineChartData.js";
import {
  DotBorder,
  DotCenter,
  ListContainer,
  ListItem,
} from "./lineChart.styled.js";

export function DropDownList({ showList, item, setItem }) {
  return (
    <ListContainer
    width="300px"
    $right="36px"
    $top="48px"
    $padding="4px"
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