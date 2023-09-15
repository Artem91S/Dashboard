import { tableList } from "./tableData.js";
import {
  DropDownContainer,
  Switcher,
  Input,
  DropDownContent,
  DropDownList,
  SwitcherContainer,
} from "./table.styled";

export function DropDownMenu({ showItem, setShowItem }) {
  return (
    <>
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