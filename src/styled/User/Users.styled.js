import styled from "styled-components";

export const Wrapper = styled.div``;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;
export const IconContainerUser = styled.div`
  background: ${(props) => props.$background};
  padding: 12px;
  width: 24px;
  height: 24px;
  margin: 0;
  border-radius: 8px;
`;
export const UserContainer = styled.div`
  display: flex;
  gap: 22px;
  padding: 20px;
  width: 100%;
  background: #242731;
  border-radius: 8px;
`;

export const StatisticStyle = styled.p`
  color: #fff;
  font-size: 44px;
  line-height: 48px;
  margin: 0;
`;

export const UserDescription = styled.p`
  color: #a2a4a8;
  font-size: 13px;
  line-height: 16px;
  font-weight: 500;
  margin: 0;
  letter-spacing:0.4px;
`;
