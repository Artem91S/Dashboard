import styled from "styled-components";
import { TableRow } from "../../components/Table/TableRow";
export const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  gap: 8px;
`;

export const Container = styled.div`
  box-sizing: border-box;
  background: #242731;
  border-radius: 4px;
  position: relative;
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 32px 30px;
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const Title = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 0;
`;
export const SettingsFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const ListTitle = styled.p`
  color: ${(props) => props.color};
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.7px;
  margin: 0;
  cursor: pointer;
`;
export const Table = styled.table`
padding-bottom:20px;
`;

export const Th = styled.th`
  display: grid;
  grid-template-columns: 220px 220px repeat(3, 80px) 160px repeat(3, 80px) 72px;
  column-gap: 60px;
  padding: 0px 30px 8px;
`;

export const Thead = styled.thead`
  display: contents;
`;
export const TrHeader = styled.tr`
  display: flex;
  justify-content: ${(props) => props.$justify};
  font-size: 11px;
  font-weight: 500px;
  line-height: 12px;
  letter-spacing: 0.4px;
  color: rgba(255, 255, 255, 0.6);
`;

export const Tbody = styled.tbody`
  display: contents;
`;
export const TrRow = styled.tr`
  display: grid;
  grid-template-columns: 220px 220px repeat(3, 80px) 160px repeat(3, 80px) 72px;
  column-gap: 60px;
  padding: 14px 30px 16px;
  justify-content: ${(props) => props.$justify};
  font-size: 11px;
  font-weight: 500px;
  line-height: 12px;
  letter-spacing: 0.4px;
  color: rgba(255, 255, 255, 0.6);
  &:hover {
    background:rgba(255, 255, 255, 0.06);
  }
`;
export const TableImg = styled.img`
  width: 28px;
  height: 40px;
`;

export const ModelContainer = styled.div`
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.2px;
  display: flex;
  gap: 16px;
`;
export const ModelContent = styled.span`
  width: 110px;
  display: flex;
`;
export const NameContainer = styled.td`
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.3px;
  display: flex;
  flex-flow: column;
  
`;
export const NameContent = styled.span`
  width: 160px;
`;
export const CardNumber = styled.span`
  font-size: 11px;
  color: rgba(255, 255, 255, 0.6);
`;
export const TdContentStart = styled.td`
  font-size: 13px;
  line-height: 20px;
  font-weight: 400;
  display: flex;
  justify-content: flex-start;
  letter-spacing: 0.1px;
  align-items: center;
  cursor: ${(props) => props.cursor};
`;
export const TdContentStartData = styled.td`
  font-size: 12px;
  line-height: 20px;
  font-weight: 400;
  display: flex;
  justify-content: flex-start;
  letter-spacing: -0.3px;
  align-items: center;
`;
export const TdContentCenter = styled.td`
  font-size: 13px;
  line-height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${(props) => props.cursor};
`;
export const TdContentStartPrice = styled.td`
  font-size: 15px;
  font-weight: 500;
  line-height: 22px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: ${(props) => props.cursor};
`;
export const TdContentEnd = styled.td`
  letter-spacing: 0.3px;
  font-size: 13px;
  line-height: 20px;
  display: flex;
  align-items: center;
`;

export const DropDownContainer = styled.ul`
  margin: 0;
  z-index: 10;
  position: absolute;
  top: 52px;
  right: 38px;
  height: 288px;
  box-sizing: border-box;
  overflow-y: scroll;
  padding: 4px;
  display: flex;
  flex-flow: column;
  border-radius: 8px;
  background: #242731;
  box-shadow: 0px 16px 24px 0px rgba(55, 58, 83, 0.16),
    0px 4px 12px 0px rgba(36, 38, 53, 0.1),
    0px 2px 4px 0px rgba(36, 38, 53, 0.08), 0px 8px 48px 0px rgba(0, 0, 0, 0.6),
    0px 2px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 12px 0px rgba(0, 0, 0, 0.4);
  &::-webkit-scrollbar {
    width: 2px;
    border-radius: 4px;
    background: #60677a;
  }
  &::-webkit-scrollbar-thumb {
    background: #a9a6ae;
    border-radius: 4px;
    width: 2px;
    height: 120px;
  }
`;

export const DropDownList = styled.li`
  height: 40px;
  padding: 10px 17px 10px 24px;
  display: flex;
  gap: 24px;
`;

export const DropDownContent = styled.span`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.6px;
  width: 194px;
`;
export const Switcher = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 6px 2px;
  background: #60677a;
  transition: all 0.2s ease-in-out;
  border-radius: 20px;
  &:before {
    transform: translateX(0px);
    transition: all 0.2s ease-in-out;
    position: absolute;
    content: "";
    width: 14px;
    height: 14px;
    left: 2px;
    bottom: 2px;
    border-radius: 20px;
    background: #242731;
  }
`;
export const SwitcherContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 27px;
  height: 19px;
  border-radius: 6px;
`;

export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + ${Switcher} {
    background: #8941ff;
  }
  &:checked + ${Switcher}:before {
    transform: translateX(8px);
  }
`;

export const HoverRow = styled(TableRow)`
 
`;
