import {
  HeaderFlex,
  FormTitle,
  FormDescription,
} from "../../styled/Forma/FormStyle.styled";

export function HeaderForma({ title }) {
  return (
    <HeaderFlex>
      <FormTitle>{title}</FormTitle>
      <FormDescription>Welcome! Please enter your details</FormDescription>
    </HeaderFlex>
  );
}
