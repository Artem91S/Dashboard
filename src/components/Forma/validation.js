import * as Yup from "yup";

export const validationSchemaSignUp = Yup.object({
    name: Yup.string()
      .min(2, "Must contain at least 2 letters")
      .max(25, "Can be no more than 25 characters")
      .matches(/^[a-zA-Zа-яА-Я]+$/, "Must be a-z A-Z а-я А-Я")
      .trim()
      .required("Required Field!"),
    password: Yup.string()
      .min(7, "Must contain at least 7 letters")
      .max(30, "Can be no more than 30 characters")
      .matches(/^[a-zA-Z0-9]+$/, "Must be a-z A-Z 0-9")
      .trim()
      .required("Required Field!"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  export const validationSchemaLogin = Yup.object({
    name: Yup.string()
      .min(2, "Must contain at least 2 letters")
      .max(25, "Can be no more than 25 characters")
      .matches(/^[a-zA-Zа-яА-Я]+$/, "Must be a-z A-Z а-я А-Я")
      .trim()
      .required("Required Field!"),
    password: Yup.string()
      .min(7, "Must contain at least 7 letters")
      .max(30, "Can be no more than 30 characters")
      .matches(/^[a-zA-Z0-9]+$/, "Must be a-z A-Z 0-9")
      .trim()
      .required("Required Field!"),
  });