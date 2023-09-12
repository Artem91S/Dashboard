import { Table, Tbody, Th, Thead, Tr,HoverRow } from "../../styled/Table/Table.styled";
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
              $justify={title.justify}
            >
              {title.text}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        <HoverRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
      </Tbody>
    </Table>
  );
}
