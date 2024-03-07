import * as Yup from "yup";
import { Formik } from "formik";

const loginFormSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required().min(8, "Password is too short"),
});

const LoginForm = () => {
  return (
    <Formik
      validationSchema={loginFormSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
      initialValues={{
        email: "",
        password: "",
      }}
    >
      {({ handleSubmit, handleChange, handleBlur, errors }) => {
        return (
          <div className="bg-gray-800 p-10 w-96 rounded-lg">
            <h1 className="text-3xl font-bold mb-6">Login</h1>
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-4">
                <label className="block text-lg font-medium">Email</label>
                <input
                  type="email"
                  className="bg-gray-700 text-white rounded px-6 py-3 w-full"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors?.email && (
                  <span className="text-red-600">{errors?.email}</span>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-lg font-medium">Password</label>
                <input
                  type="password"
                  className="bg-gray-700 text-white rounded px-6 py-3 w-full"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors?.password && (
                  <span className="text-red-600">{errors?.password}</span>
                )}
              </div>

              <button
                type="submit"
                className="bg-green-500 text-white px-12 py-4 rounded hover:bg-green-400 w-full"
              >
                Login
              </button>
            </form>
            <p className="mt-4 text-center">
              Don't have an account?{" "}
              <a
                href="./register.html"
                className="text-green-400 hover:underline"
              >
                Register
              </a>
            </p>
          </div>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
