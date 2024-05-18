import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import toast from "react-hot-toast";

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
        <Form autoComplete="off">
          <label>
            Email
            <Field type="email" name="email" />
          </label>
          <label>
            Password
            <Field type="password" name="password" />
          </label>
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </>
  );
}
