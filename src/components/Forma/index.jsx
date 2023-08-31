import { FormikForm } from "./Formik";
import { validationSchemaSignUp,validationSchemaLogin  } from "./validation";
import { LogInForm,SignUpForm } from "./FormDate";
import { HeaderForma } from "./HeaderForma";
import { ToggleForma } from "./ToggleForma";
import { ContainerForma } from "../../styled/Forma/FormStyle.styled";
export function Forma({ forma, setForma }) {
  return (
    <ContainerForma >
     <HeaderForma
     title={!forma ? "Welcome": "Welcome back"}
     />
      <FormikForm
        initialValues={
        !forma ? {
          name: "",
          password: "",
          email:''
        } :{
          name: "",
          password: "",
        }}
        validationSchema={!forma ? validationSchemaSignUp : validationSchemaLogin}
        fields={!forma ? SignUpForm: LogInForm}
        submitBtn={!forma ? "Create account ": "Log in"}
      />
     <ToggleForma
      link={ !forma ? "Log in" :"Sign up"}
      forma={forma}
      setForma={setForma}
     />
    </ContainerForma>
  );
}
