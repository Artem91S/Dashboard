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
  TableImgContainer,
  TdContentStart,
  TdContentStartPrice,
  TdContentStartData,
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
          <TableImgContainer>
            <TableImg src={card} alt="card image" />
            </TableImgContainer>
            <ModelContent>{value.model.name}</ModelContent>
          </ModelContainer>
          <NameContainer>
            <NameContent>{value.card_name}</NameContent>
            <CardNumber>Card{value.card_number}</CardNumber>
          </NameContainer>
          <TdContentEnd>{value.type}</TdContentEnd>
          <TdContentCenter>{value.limited}</TdContentCenter>
          <TdContentCenter>{value.operations}</TdContentCenter>
          <TdContentStartData>{ConvertDate(value.date)}</TdContentStartData>
          <TdContentStart>{value.rating}</TdContentStart>
          <TdContentEnd>{value.status}</TdContentEnd>
          <TdContentStartPrice>{value.price}</TdContentStartPrice>
          <TdContentCenter cursor="pointer">
            <Options />
          </TdContentCenter>
        </Tr>
      ))}
    </>
  );
}
