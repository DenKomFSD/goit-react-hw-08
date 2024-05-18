import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };
  //testden@mail.com
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className={css.formik}>
          <label className={css.label}>
            Username
            <Field type="text" name="name" className={css.field} />
          </label>
          <label className={css.label}>
            Email
            <Field type="email" name="email" className={css.field} />
          </label>
          <label className={css.label}>
            Password
            <Field type="password" name="password" className={css.field} />
          </label>
          <button type="submit" className={css.btn}>
            Register
          </button>
        </Form>
      </Formik>
    </>
  );
}
