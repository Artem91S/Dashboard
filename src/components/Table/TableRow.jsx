import { useContext,Fragment } from "react";
import { DataContext } from "../../Hooks/Context";
import {
  TableImg,
  TrRow,
  CardNumber,
  ModelContainer,
  ModelContent,
  NameContainer,
  NameContent,
  TdContentCenter,
  TdContentStart,
  TdContentStartPrice,
  TdContentStartData,
} from "../../styled/Table/Table.styled";
import { Options } from "../../icons/Options";
import { ConvertDate } from "./Utile";

export function TableRow({className}) {
  const fetchDate = useContext(DataContext);
  return (
    <TrRow >
      {fetchDate?.general_sales_time?.map((value, index) => (
       <Fragment className={className} key={Math.random()} >
          <ModelContainer>
            <TableImg src='../img/card.png' alt="Card image" />
            <ModelContent>{value.model.name}</ModelContent>
          </ModelContainer>
          <NameContainer>
            <NameContent>{value.card_name}</NameContent>
            <CardNumber>Card{value.card_number}</CardNumber>
          </NameContainer>
          <TdContentStart>{value.type}</TdContentStart>
          <TdContentCenter>{value.limited}</TdContentCenter>
          <TdContentCenter>{value.operations}</TdContentCenter>
          <TdContentStartData>{ConvertDate(value.date)}</TdContentStartData>
          <TdContentStart>{value.rating}</TdContentStart>
          <TdContentStart>{value.status}</TdContentStart>
          <TdContentStartPrice>{value.price}</TdContentStartPrice>
          <TdContentCenter cursor="pointer">
            <Options />
          </TdContentCenter>
        </Fragment>
      ))}
    </TrRow>
  );
}
