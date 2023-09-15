import { ItemsList, ListContainer } from "./piaChart.styled.js";
import { listData } from "./piaChartData.js";

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
