import styled from "styled-components";

export const Container = styled.div`
  padding: 24px 32px 16px 32px;
  display: flex;
  justify-content: space-between;
  box-size: border-box;
  position: relative;
`;
export const HeaderTitle = styled.p`
color:#FFF;
font-size:18.2px; 
line-height:23px;
font-weight:500;
letter-spacing:0.5px;
margin:0;
`;

export const HeaderTypes = styled.div`
  display:flex;
  gap: 16px;

`;
export const TypeTitle = styled.p`
color:rgba(255, 255, 255, 0.60);
font-size:12px; 
line-height:19px;
letter-spacing:0.6px;
opacity:0.6;
margin:0;
`;

export const TypesDropDown = styled.div`
  display:flex;
  cursor:pointer;
  gap:6px;
`;

export const DropDownText = styled.p`
color:${props=>props.color};
font-size:13px; 
line-height:20px;
letter-spacing:0.1px;
margin:0;
`;