import styled from "styled-components";

export const FormStyle = styled.form`
  width: 500px;
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 16px;
`;

export const ContainerForma = styled.div`
  box-size: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content:center;
  flex-flow: column;
  gap: 48px;
  height:100vh;
  margin: 0 auto;
  background:#242731;
`;

export const HeaderFlex = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 8px;
`;

export const FormTitle = styled.p`
  color: #fff;
  margin: 0;
  font-size: 48px;
  line-height: 46px;
  font-weight: 500;
`;

export const FormDescription = styled.p`
  color: #9496a6;
  margin: 0;
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
`;

export const FormButton = styled.button`
  color: #fff;
  margin-top: 48px;
  border-radius: 8px;
  font-size: 15px;
  line-height: 24px;
  font-weight: 500;
  box-sizing: border-box;
  background: #8941ff;
  width: 500px;
  padding: 20px 40px;
  border: none;
`;

export const InputStyle = styled.input`
  box-sizing: border-box;
  background: transparent;
  border-radius: 8px;
  width: 100%;
  color: #7d7f8e;
  height: 64px;
  padding: 10px 16px;
  border: 1px solid #3d4250;
  &:placeholder {
    color: #7d7f8e;
    font-size: 15px;
    line-height: 24px;
  }
`;

export const ErrorStyle = styled.div`
  text-align: start;
  font-weight: bold;
  color: #aa1803;
`;

export const LinkStyle = styled.a`
  color: #78b4ed;
  font-size: 15px;
  line-height: 24px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
`;

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ToggleText = styled.p`
  color: #fff;
  font-size: 15px;
  line-height: 24px;
`;
