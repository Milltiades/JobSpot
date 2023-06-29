import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/redux";
import { isAuth } from "../store/authSlice";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useSignOut } from "react-auth-kit";
import axios from "axios";

const Profile = () => {
  const [isJob, setIsJob] = useState<boolean>(false);

  const [done, setDone] = useState(false)

  const loggedIn = useSelector((store: RootState) => store.auth.value);
  const dispatch = useDispatch();
  const signOut = useSignOut();
  const navigate = useNavigate();

  const [title, setTitle] = useState<any>();
  const [body, setBody] = useState<any>();
  const [company, setCompany] = useState<any>();
  const [category, setCategory] = useState<any>();
  const [city, setCity] = useState<any>();
  const [compensation, setCompensation] = useState<any>();
  const [email, setEmail] = useState<any>()

  const handleSubmit = async () => {
    try {
      await axios
        .post("http://localhost:4000/api/jobs", {
          title,
          body,
          company,
          category,
          city,
          compensation,
          email
        })
        .then((res) => {
          if (res.data) {
            setIsJob(false);
            setTitle('')
            setBody('')
            setCompany('')
            setCategory('')
            setCity('')
            setCompensation('')
            setEmail('')
            if(!done)
              setDone(true)
              setTimeout(() => {
                setDone(false)
            }, 3000)
          }
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      const item = localStorage.getItem("user");
      console.log("item: ", item);

      dispatch(isAuth(item));
    } else {
      console.log("User is not logged in");
      navigate("/login");
    }
  }, []);

  return (
    <div className=" p-5 w-full  profile-content relative top-20 lg:top-40 lg:px-40 bg-white  space-y-10 ">
      <h1 className=" text-slate-950 text-4xl font-bold ">{loggedIn}</h1>

      <div className="  w-full items-center justify-between flex flex-row ">
        <button
          onClick={() => setIsJob(true)}
          className="p-2 bg-blue-950 text-white hover:bg-blue-900 focus:bg-blue-600 rounded"
        >
          Add job
        </button>

        <button
          onClick={() => {
            localStorage.removeItem("user");
            signOut();
            navigate("/login");
            dispatch(isAuth("Logged out"));
          }}
          className="p-2 bg-blue-950 text-white hover:bg-blue-900 focus:bg-blue-600 rounded"
        >
          log out
        </button>
      </div>

      <div
        className={`${
          isJob ? "flex" : "hidden"
        } shadow-lg w-full p-5 bg-slate-100 rounded  md:flex-row gap-5 lg:justify-between lg:p-20`}
      >
        <form
          onSubmit={handleSubmit}
          className=" w-full gap-4 flex flex-col md:w-1/3 "
        >
          <input
            type="title"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className=" p-2"
          />
          <input
            type="body"
            placeholder="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
            className=" p-2"
          />
          <input
            type="company"
            placeholder="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
            className=" p-2"
          />

<input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className=" p-2"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className=" p-2"
          >
            <option value="All categories">All categories</option>
            <option value="Administration/Finance">
              Administration/Finance
            </option>
            <option value="Art/Media">Art/Media</option>
            <option value="Banking">Banking</option>
            <option value="Beauty/Aesthetic Medicine">
              Beauty/Aesthetic Medicine
            </option>
            <option value="Engineering">Engineering</option>
            <option value="Human resources">Human resources</option>
            <option value="IT">IT</option>
            <option value="Insurance">Insurance</option>
            <option value="Legal">Legal</option>
            <option value="Logistics/transportation">
              Logistics/transportation
            </option>
            <option value="Marketing">Marketing</option>
            <option value="Medical">Medical</option>
            <option value="Other">Other</option>
          </select>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className=" p-2"
          >
            <option value="All">All</option>
            <option value="Tbilisi">Tbilisi</option>
            <option value="Kutaisi">Kutaisi</option>
            <option value="Batumi">Batumi</option>
            <option value="Zugdidi">Zugdidi</option>
            <option value="Poti">Poti</option>
            <option value="Telavi">Telavi</option>
          </select>
          <input
            type="compensation"
            placeholder="compensation"
            value={compensation}
            onChange={(e) => setCompensation(e.target.value)}
            required
            className=" p-2"
          />

          <button className=" p-2 bg-blue-950 text-white hover:bg-blue-900 focus:bg-blue-600 rounded">
            {" "}
            Submit
          </button>
        </form>
        <div className=" bg-add-job w-2/3 lg:w-1/2"></div>
      </div>
      <h1 className= {`${done? 'flex' : 'hidden'} text-green-500 text-2xl fle flex-row items-center` }>
      <span className="mr-2">New job added  </span> 
         <span className="material-symbols-outlined done">done</span>{" "}
      </h1>
    </div>
  );
};

export default Profile;
