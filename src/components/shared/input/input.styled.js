import styled from "styled-components";

export const InputStyle = styled.input`
box-sizing: border-box;
background: transparent;
border-radius: 8px;
color: #7d7f8e;
letter-spacing: 1px;
height: 64px;
padding: 10px 16px;
border: 1px solid #3d4250;
&:placeholder {
  color: #7d7f8e;
  letter-spacing: 0.9px;
  font-size: 14px;
  line-height: 20px;
}
`;

export const ErrorStyle = styled.div`
text-align: start;
font-weight: bold;
color: #aa1803;
`;