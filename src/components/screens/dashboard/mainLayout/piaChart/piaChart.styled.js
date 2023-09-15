import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 428px;
  box-sizing: border-box;
  background: #242731;
  border-radius: 4px;
  z-index: 3;
`;

export const FlexBlock = styled.div`
  display: flex;
  gap: 38px;
  padding: 16px 38px 15px 32px;
`;
export const ListContainer = styled.ul`
  display: flex;
  flex-flow: column;
  gap: 16px;
  padding-top: 7px;
  padding-left: 16px;
  margin: 0;
`;

export const ItemsList = styled.li`
  color: #9f9f9f;
  font-size: 12px;
  line-height: 16px;
  list-style-type: none;
  &:before {
    content: "";
    display: inline-block;
    border-radius: 20px;
    position: relative;
    right: 16px;
    width: 8px;
    height: 8px;
    background: ${(props) => props.$background};
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  gap: 38px;
  justify-content: space-between;
  padding: 24px 34px 16px 32px;
`;
export const Title = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.8px;
  margin: 0;
`;
export const HeaderFlex = styled.div`
  display: flex;
  gap: 16px;
`;

export const TypeBlock = styled.div`
  display: flex;
  cursor: pointer;
`;

export const TypeList = styled.p`
  color: ${(props) => props.color};
  font-size: 13px;
  opacity: 0.8;
  letter-spacing: 0.7px;
  line-height: 19px;
  margin: 0;
`;
export const Description = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
  line-height: 16px;
  opacity: 0.8;
  margin: 0;
`;

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