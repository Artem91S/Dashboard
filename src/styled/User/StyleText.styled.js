import styled from 'styled-components';

export const StyleText =styled.p`
margin:0;
color:${(props)=>props.color};
font-size:${(props)=>props.fontSize};
line-height:${(props)=>props.$lineHeight};
font-weight:${(props)=>props.fontWeight};
`