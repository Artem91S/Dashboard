import { FormikForm } from "../../shared/formikForm";
import { validationSchemaSignUp,validationSchemaLogin  } from "../../../data/validation.js";
import { LogInForm,SignUpForm } from "./homeData.js";
import { HeaderForma } from "./TitileForma";
import { ToggleForma } from "./ToggleForma";
import { ContainerForma } from "./home.styled.js";

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
