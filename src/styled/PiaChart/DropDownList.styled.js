
import styled from "styled-components";

export const ListItem = styled.li`
  padding: 12px 16px;
  color:#A2A4A8;
  display: flex;
  list-style-type: none;
  justify-content:space-between;
  align-items:center;
  gap: 16px;
  font-size: 13px;
  line-height: 20px;
  &:hover {
    color:#FFF;
    background: ${(props) => props.$backgroundHover};
  }
`;
