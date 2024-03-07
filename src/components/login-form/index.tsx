import yup from "yup";
import { Formik } from "formik";

const LoginForm = () => {
  return (
    <Formik
      onSubmit={(values) => {
        console.log(values);
      }}
      initialValues={{}}
    >
      {({ handleSubmit, handleChange, handleBlur }) => {
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
              </div>

              <button type="submit" className="bg-green-500 text-white px-12 py-4 rounded hover:bg-green-400 w-full">
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
