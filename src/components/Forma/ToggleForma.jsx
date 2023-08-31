import { LinkStyle,ToggleText,ToggleContainer } from "../../styled/Forma/FormStyle.styled";

export function ToggleForma({link,setForma,forma}) {
  return (
    <ToggleContainer>
    <ToggleText>
      Or
    </ToggleText>
    <LinkStyle
      href="/"
      onClick={(e) => {
        e.preventDefault();
        setForma(!forma);
      }}
    >
     {link}
    </LinkStyle>
  </ToggleContainer>
  )
}
