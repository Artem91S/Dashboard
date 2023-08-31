import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 38px;
  justify-content: space-between;
  padding: 24px 32px 16px 32px;
`;
export const Title = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin: 0;
`;
export const FlexBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const TypeBlock = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const TypeList = styled.p`
  color: ${(props) => props.color};
  font-size: 13px;
  line-height: 15px;
  margin: 0;
`;
export const Description = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
  line-height: 16px;
  margin: 0;
`;
