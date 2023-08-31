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
font-size:18px; 
line-height:24px;
font-weight:500;
margin:0;
`;

export const HeaderTypes = styled.div`
  display:flex;
  gap: 16px;
  align-items:center;
`;
export const TypeTitle = styled.p`
color:rgba(255, 255, 255, 0.60);
font-size:12px; 
line-height:16px;
margin:0;
`;

export const TypesDropDown = styled.div`
  display:flex;
  align-items:center;
  cursor:pointer;
`;

export const DropDownText = styled.p`
color:${props=>props.color};
font-size:13px; 
line-height:15px;
margin:0;
`;