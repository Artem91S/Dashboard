import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { FormButton,FormStyle } from "../../styled/Forma/FormStyle.styled";
import { Input } from "./Input";

export function FormikForm({
  initialValues,
  validationSchema,
  fields,
  submitBtn,
}) {
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
         actions.setSubmitting(false)
         navigate("/dashboard")
    }}
    >
      {props =>
      <FormStyle
      onSubmit={props.handleSubmit}
      >
        {fields?.map((field) => (
          <Input
          key={field.name} {...field} />
        ))}
        <FormButton  type="submit">
          {submitBtn}
        </FormButton>
      </FormStyle>}
    </Formik>
  );
}
