import { useContext } from "react";
import { DataContext } from "../../Hooks/Context";
import {
  TableImg,
  Tr,
  CardNumber,
  ModelContainer,
  ModelContent,
  NameContainer,
  NameContent,
  TdContentCenter,
  TdContentEnd,
} from "../../styled/Table/Table.styled";
import { Options } from "../../icons/Options";
import card from "../../img/card.png";
import { ConvertDate } from "./Utile";

export function TableRow() {
  const fetchDate = useContext(DataContext);
  return (
    <>
      {fetchDate?.general_sales_time?.map((value, index) => (
        <Tr key={Math.random()}>
          <ModelContainer>
            <TableImg src={card} alt="card image" />
            <ModelContent>{value.model.name}</ModelContent>
          </ModelContainer>
          <NameContainer>
            <NameContent>{value.card_name}</NameContent>
            <CardNumber>Card{value.card_number}</CardNumber>
          </NameContainer>
          <TdContentEnd>{value.type}</TdContentEnd>
          <TdContentCenter>{value.limited}</TdContentCenter>
          <TdContentCenter>{value.operations}</TdContentCenter>
          <TdContentCenter>{ConvertDate(value.date)}</TdContentCenter>
          <TdContentCenter>{value.rating}</TdContentCenter>
          <TdContentEnd>{value.status}</TdContentEnd>
          <TdContentCenter>{value.price}</TdContentCenter>
          <TdContentCenter cursor="pointer">
            <Options />
          </TdContentCenter>
        </Tr>
      ))}
    </>
  );
}
