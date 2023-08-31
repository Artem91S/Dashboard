import styled from "styled-components";

export const DotBorder = styled.a`
  border: ${(props) => props.$border};
  width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  border-radius: 50%;
  margin: 0;
`;

export const ListItem = styled.li`
  padding: 8px 16px 8px 24px;
  display: flex;
  list-style-type: none;
  align-items: center;
  gap: 16px;
  font-size: 14px;
  line-height: 20px;
  &:hover {
    border-radius: ${(props) => props.borderHover};
    background: ${(props) => props.backgroundHover};
  }
`;

export const ListContainer = styled.ul`
  border-radius: 8px;
  box-sizing: border-box;
  padding: ${(props) => props.$padding};
  background: #242731;
  width: ${(props) => props.width};
  box-shadow: 0px 16px 24px 0px rgba(55, 58, 83, 0.16),
    0px 4px 12px 0px rgba(36, 38, 53, 0.1),
    0px 2px 4px 0px rgba(36, 38, 53, 0.08), 0px 8px 48px 0px rgba(0, 0, 0, 0.6),
    0px 2px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 12px 0px rgba(0, 0, 0, 0.4);
  display: ${(props) => props.display};
  flex-flow: column;
  margin: 0;
  position: absolute;
  right: ${(props) => props.$right};
  top: ${(props) => props.$top};
  z-index: 3;
`;

export const DotCenter = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  background: ${(props) => props.$background};
  display: inline-block;
`;

export const CloseModal = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: 1;
`;
