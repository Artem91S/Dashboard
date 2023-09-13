import {
  Table,
  Tbody,
  Th,
  Thead,
  TrHeader,
} from "../../styled/Table/Table.styled";
import { TableRow } from "./TableRow";
import { tableTitles } from "./TableData";

export function TableLayout() {
  return (
    <>
      <Table>
        <Thead>
          <Th>
            {tableTitles.map((title) => (
              <TrHeader key={title.id} $justify={title.justify}>
                {title.text}
              </TrHeader>
            ))}
          </Th>
        </Thead>
        <Tbody>
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
        </Tbody>
      </Table>
    </>
  );
}
