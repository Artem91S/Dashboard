import { Fragment } from "react";
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
} from "./table.styled";
import { TableDate } from './tableData.js'
import { Options } from "../../../../icons/Options";
import { ConvertDate } from "../../../../../utils/convertDate.js";
import { useGetData } from "../../../../../hooks/useGetData";
import Card from '../../../../../assets/card.png';
export function TableRow({className}) {
  // const { data } = useGetData()
  return (
    <TrRow >
      {TableDate.map((value, index) => (
       <Fragment className={className} key={Math.random()} >
          <ModelContainer>
            <TableImg src={Card} alt="Card image" />
            <ModelContent>{value.name}</ModelContent>
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
