import styled from 'styled-components';

export const ListContainer =styled.ul`
display:flex;
flex-flow:column;
gap:16px;
padding-top:7px;
padding-left:16px;
margin:0;
`;

export const ItemsList =styled.li`
color:#9F9F9F;
font-size:12px;
line-height:16px;
list-style-type:none;
&:before {
    content:'';
    display:inline-block;
    border-radius:20px;
    position:relative;
    right:16px;
    width:8px;
    height:8px;
    background:${props=>props.$background}
}
`