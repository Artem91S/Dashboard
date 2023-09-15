import {
    Table,
    Tbody,
    Th,
    Thead,
    TrHeader,
  } from "./table.styled";
  import { TableRow } from "./TableRow";
  import { tableTitles } from "./tableData.js";
  
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