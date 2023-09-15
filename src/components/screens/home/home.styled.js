import styled from "styled-components";

export const FormStyle = styled.form`
  max-width: 500px;
  display: flex;
  flex-flow: column;
  gap: 16px;
`;

export const ContainerForma = styled.div`
  display: flex;
  flex-flow: column;
  gap: 48px;
  padding: 164px 696px 376px 710px;
  background: #242731;
`;

export const HeaderFlex = styled.div`
  text-align: center;
`;

export const FormTitle = styled.p`
  color: #fff;
  margin: 0;
  font-size: 48px;
  letter-spacing: 1px;
  line-height: 46px;
  font-weight: 500;
  padding-bottom: 14px;
`;

export const FormDescription = styled.p`
  color: #9496a6;
  margin: 0;
  letter-spacing: 0.5px;
  font-size: 15px;
  line-height: 24px;
  font-weight: 500;
`;

export const LinkStyle = styled.a`
  text-align: center;
  color: #78b4ed;
  font-size: 15px;
  line-height: 24px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
`;

export const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const ToggleText = styled.p`
  margin: 0;
  text-align: center;
  color: #fff;
  font-size: 15px;
  opacity: 0.6;
  line-height: 24px;
`;
