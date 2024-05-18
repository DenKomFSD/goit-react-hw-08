import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import css from "./LoginForm.module.css";

export default function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(login(values))
      .unwrap()
      .then((data) => {
        console.log(data);
        toast.success("You logged in succesfully!");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Oops something went wrong!");
      });
    actions.resetForm();
  };
  //Dentest@mail.com
  //Dentest
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off" className={css.formik}>
          <label className={css.label}>
            Email
            <Field type="email" name="email" className={css.field} />
          </label>
          <label className={css.label}>
            Password
            <Field type="password" name="password" className={css.field} />
          </label>
          <button type="submit" className={css.btn}>
            Login
          </button>
        </Form>
      </Formik>
    </>
  );
}
