import React, { useEffect, useState } from "react";
import { Input } from "../../Components/ui/input";
import { Button } from "../../Components/ui/button";
import * as yup from "yup";
import {
  useCreateSessionMutation,
  useGetRequestTokenQuery,
  useGetauthenticateUserMutation,
} from "../../store/endpoints/Auth.endpoint";
import { useGetAccountDetailQuery } from "../../store/endpoints/General.endpoint";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Form, Formik } from "formik";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { LoadingComponent } from "../../Components";

const SignInPage = () => {
  // const [username, setUsername] = useState("Davidkyaw");
  // const [password, setPassword] = useState("kyaw201218");

  const [requestToken, setRequestToken] = useState("");
  const nav = useNavigate();
  const { data } = useGetRequestTokenQuery();
  const [postAuth, { data: account, error, isError }] =
    useGetauthenticateUserMutation();
  const [createSession, { data: sessionAccount, isSuccess }] =
    useCreateSessionMutation();
  useEffect(() => {
    setRequestToken(data?.request_token);
  }, [data]);

  // const onSubmitHandler = async (e) => {
  //   e.preventDefault();

  // };

  useEffect(() => {
    if (localStorage.getItem("sessionID")) {
      nav("/");
    }
  }, [localStorage.getItem("sessionID")]);

  const { data: accountDetail, isLoading } = useGetAccountDetailQuery(
    sessionAccount?.session_id
  );

  console.log();

  const initialValue = {
    username: "",
    password: "",
  };

  const validationSchema = yup.object({
    username: yup.string().required("name is required!"),

    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be 8 letters"),
  });

  const handleSubmit = async (values) => {
    if (requestToken) {
      const validateResult = await postAuth({
        username: values?.username,
        password: values?.password,
        requestToken,
      });

      if (validateResult.data?.success) {
        const sessionResult = await createSession({
          requestToken,
        });
        if (sessionResult.data?.success) {
          localStorage.setItem("sessionID", sessionResult.data.session_id);
        }
      }
    }
    if (localStorage.getItem("sessionID")) {
      toast.success("Login Successful");
    } else if (isError) {
      toast.error("somewrong");
    }
  };

  return (
    <div>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <div className=" h-screen flex items-center justify-center w-full">
          <div className=" max-w-sm shadow-2xl border border-secondary-100 p-5  w-full">
            <h1 className=" text-2xl font-semibold text-slate-100 mb-3">
              Sign In
            </h1>
            <Formik
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              initialValues={initialValue}
            >
              {({ handleBlur, handleChange, values, isSubmitting }) => (
                <>
                  {
                    <Form className=" space-y-3">
                      <div className=" space-y-3 mb-4">
                        <Input
                          onBlur={handleBlur}
                          onChange={handleChange}
                          values={values?.username}
                          placeholder="username"
                          type="username"
                          name="username"
                          id="username"
                        />
                        <ErrorMessage
                          className=" text-red-600 text-xs md:text-sm"
                          component={"p"}
                          name={"username"}
                        />
                        <Input
                          onBlur={handleBlur}
                          onChange={handleChange}
                          values={values?.password}
                          placeholder="password"
                          type="password"
                          name="password"
                          id="password"
                        />
                        <ErrorMessage
                          className=" text-red-600 text-xs md:text-sm"
                          component={"p"}
                          name="password"
                        />
                      </div>
                      <Button
                        disabled={isSubmitting}
                        type="submit"
                        className="w-full"
                      >
                        Sign In
                        {isSubmitting && (
                          <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                        )}
                      </Button>
                    </Form>
                  }
                </>
              )}
            </Formik>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignInPage;
