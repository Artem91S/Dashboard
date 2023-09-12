import styled from "styled-components";

export const Container = styled.div`
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
  letter-spacing:0.8px;
  margin: 0;
`;
export const FlexBlock = styled.div`
  display: flex;
  gap:16px;
`;

export const TypeBlock = styled.div`
  display: flex;
  cursor: pointer;
`;

export const TypeList = styled.p`
  color: ${(props) => props.color};
  font-size: 13px;
  opacity:0.8;
  letter-spacing:0.7px;
  line-height: 19px;
  margin: 0;
`;
export const Description = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
  line-height: 16px;
  opacity:0.8;
  margin: 0;
`;
