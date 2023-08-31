
import styled from "styled-components";

export const ListItem = styled.li`
  padding: 12px 16px;
  display: flex;
  list-style-type: none;
  justify-content:space-between;
  align-items:center;
  gap: 16px;
  font-size: 13px;
  line-height: 20px;
  &:hover {
    border-radius: ${(props) => props.$borderHover};
    background: ${(props) => props.$backgroundHover};
  }
`;
