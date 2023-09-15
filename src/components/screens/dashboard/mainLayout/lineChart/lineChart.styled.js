import styled from "styled-components";

 
export const LineChartContainer = styled.div`
  width: 1312px;
  max-height:344px;
  background: #242731;
  border-radius: 4px;
  box-size: border-box;
`;

export const Block = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  padding: 0 0 32px 0;
`;

export const FlexChart = styled.div`
  display: flex;
  gap: 21px;
`;
export const HeaderChartContainer = styled.div`
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

export const Container = styled.div`
  display: flex;
  gap: 16px;
`;
export const ContainerBlock =styled.div`
 display: flex;
 gap:47px;
`
export const SquareFlex = styled.div`
  display: flex;
  padding-top:8px;
  flex-flow: column;
  gap: 24px;
`;
export const FlexBlock = styled.div`
  display: flex;
  flex-flow: column;
  gap: 16.5px;
  padding-top:8px;
`;

export const Flex = styled.div`
  display: flex;
  flex-flow: column;
`;
export const Title = styled.p`
  color: #fff;
  font-size: 14px;
  line-height: 20px;
  margin: 0;
`;
export const Description = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 11px;
  line-height: 12px;
  
  opacity:0.6;
  margin: 0;
`;

export const DotBorder = styled.a`
  border: ${(props) => props.$border};
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  border-radius: 50%;
  margin: 0;
`;

export const ListItem = styled.li`
  padding: 8px 16px 8px 28px;
  display: flex;
  list-style-type: none;
  align-items: center;
  gap: 16px;
  font-size: 14px;
  letter-spacing:1px;
  line-height: 24px;
  &:hover {
    border-radius: ${(props) => props.borderHover};
    background: ${(props) => props.backgroundHover};
  }
`;

export const ListContainer = styled.ul`
  border-radius: 8px;
  box-sizing: border-box;
  height:${(props) => props.height};
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
  width: 14px;
  height: 14px;
  border-radius: 50%;
  cursor: pointer;
  background: ${(props) => props.$background};
  display: inline-block;
`;

