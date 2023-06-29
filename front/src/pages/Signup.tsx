import  { useState } from "react";
import { Link } from "react-router-dom";
import { useSignUp } from "../hooks/useSignUp";

const Signup = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { signup, error, isLoading} = useSignUp();

  const handleSubmit = async (e:any) => {
     e.preventDefault()

    await signup(email, password)
  }

  return (
    <div className="p-5 w-full  job-content relative top-32 lg:top-40 ">
    <form onSubmit={handleSubmit}
    className="flex flex-col w-full p-10 md:w-2/3 lg:w-1/3 absolute left-1/2  transform -translate-x-1/2 "
    >
      <h3 className="text-3xl font-bold">Sign up</h3>
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

      <button
      disabled={isLoading}
      className=" mt-16 bg-blue-950 py-2 text-white hover:bg-slate-700 shadow-xl">Sign up</button>
      <Link to={'/login'} className=" text-xs mt-2 underline">Log in</Link>
    {error && <div className="font-medium text-red-600 bg-red-100 rounded p-2 border-2 border-red-600 mt-5"> {error}</div>}
    </form>
    </div>
  );
};

export default Signup;
