
import  { useState } from "react";
// import { useSignIn } from "react-auth-kit";
// import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { RootState } from "../store/redux";

import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");



  // const isAuthUser = useSelector((store: RootState) =>store.auth.value )
  // const dispatch = useDispatch();

  // const signIn = useSignIn();

  const { login, error, isLoading} = useLogin();

  // const handleSubmit = async (e:any) => {
  //    e.preventDefault()

  //    console.log(email, password)
  // }

  const handleSubmit = async () => {

    await login(email, password)
    // try {
    //   const response = await axios.post(
    //     "http://localhost:4000/api/user/login/",
    //     {
    //       email,
    //       password,
    //     }
    //   );

   
    //   if (response.data) {
     
    //     signIn({
    //       token: response.data.token,
    //       expiresIn: 3600,
    //       tokenType: "Bearer",
    //       authState: { email, password },
    //     });
    //     dispatch(isAuth(response.data.token))
    //    if(isAuthUser !== response.data.token){
    //     navigate('/')
    //    }
    //   }
    // } catch (error) {
    //   console.error(error);
    // }

  };

  return (
    <div className="p-5 w-full  job-content relative top-32 lg:top-40 ">
    <form onSubmit={handleSubmit}
    className="flex flex-col w-full p-10 md:w-2/3 lg:w-1/3 absolute left-1/2  transform -translate-x-1/2 "
    >
      <h3 className="text-3xl font-bold">Log in</h3>
      <label className="text-xl font-medium mt-8">Email</label>
      <input
        type="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
        className=" mt-2 h-7 shadow-lg p-1"
        required
      />

      <label className="text-xl font-medium mt-3">Password</label>
      <input
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
        className=" mt-2 h-7 shadow-lg p-1"
        required
      />

      <button disabled={isLoading} className=" mt-16 bg-blue-950 py-2 text-white hover:bg-slate-700 shadow-xl">Log in</button>
      <Link to={'/signup'} className=" text-xs mt-2 underline">Sign up</Link>
      {error && <div className="font-medium text-red-600 bg-red-100 rounded p-2 border-2 border-red-600 mt-5"> {error}</div>}

    </form>
    </div>
  );
};

export default Login;
