import { ItemsList, ListContainer } from "../../styled/PiaChart/LabelList.styled";
import { listData } from "./data";

export function ListItems() {
  return (

    <ListContainer>
    {listData.map((content) => (
      <ItemsList
      key={content.id}
      $background={content.color}
      >{content.title}</ItemsList>
    ))}
    </ListContainer>
  )
}
