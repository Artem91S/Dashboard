import { Table, Tbody, Th, Thead, Tr } from "../../styled/Table/Table.styled";
import { TableRow } from "./TableRow";
import { tableTitles } from "./TableData";

export function TableLayout() {
  return (
    <Table>
      <Thead>
        <Tr>
          {tableTitles.map((title) => (
            <Th
              key={title.id}
              $justify={
                title.id === "1" || title.id === "2" ? "flex-start" : "center"
              }
            >
              {title.text}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
      </Tbody>
    </Table>
  );
}
