import * as Yup from "yup";
export const signUp = Yup.object({
  fullName: Yup.string().required("this name fied is required !"),
  email: Yup.string().required("this email fied is required !"),
  password: Yup.string().required("this fied is required !"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "did not matched !")
    .required("confirm your password"),
});
export const logIn = Yup.object({
  email: Yup.string().required("this email fied is required !"),
  password: Yup.string().required("this fied is required !"),
});
