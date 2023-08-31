import { tableList } from "./TableData";
import {
  DropDownContainer,
  Switcher,
  Input,
  DropDownContent,
  DropDownList,
  SwitcherContainer,
} from "../../styled/Table/Table.styled";
import { CloseModal } from "../../styled/LineChart/DropDownList.styled";

export function DropDownMenu({ showItem, setShowItem }) {
  return (
    <>
      <CloseModal onClick={() => setShowItem(!showItem)} />
      <DropDownContainer>
        {tableList.map((item) => (
          <DropDownList key={item.id}>
            <DropDownContent>{item.text}</DropDownContent>
            <SwitcherContainer>
              <Input type="checkbox" />
              <Switcher />
            </SwitcherContainer>
          </DropDownList>
        ))}
      </DropDownContainer>
    </>
  );
}
