import { useField } from "formik";
import { ErrorStyle,InputStyle } from "./input.styled.js";

export function Input({ ...props }) {
    const [field, meta] = useField(props);
    return (
      <>
      <InputStyle
        type={props.type}
        placeholder={props.placeholder}
        id={props.id}
        name={props.name}
        {...field}
        value={field.value || ""}
      />
      {meta.touched && meta.error
          ? <ErrorStyle
          >
              {meta.error}
          </ErrorStyle>
          : null}
          </>
    );
  };