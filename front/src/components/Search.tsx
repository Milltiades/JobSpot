import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/redux";
import { chooseCity } from "../store/citySlice";
import { chooseCategory } from "../store/categorySlice";
import { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const city = useSelector((store: RootState) => store.city.value);
  const category = useSelector((store: RootState) =>store.category.value )
  const dispatch = useDispatch();

 

  const selectCity = (e: any) => {
    dispatch(chooseCity(e.target.value));
   
  };
  const selectCategory = (e:any) => {
    dispatch(chooseCategory(e.target.value))
    
  }
  console.log(city);
  console.log(category);

  const [jobs, setJobs] = useState<any>(null);


  useEffect(() => {
    const getJobs = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/jobs");
        setJobs(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getJobs();
  }, []);

  return (
    <div className="w-full bg-job-img px-5 pt-20 pb-5 lg:px-40 header">
      <form className=" flex flex-col space-y-10 md:px-60  lg:flex-row justify-center lg:gap-3 lg:px-20  lg:space-y-0">
        {/* <input
          type="text"
          placeholder="(e.g Insurance)"
          className=" p-2.5 rounded-md lg:w-56"
        /> */}

        <select
          name="City"
          value={city}
          onChange={selectCity}
          className=" rounded-md p-2.5 min-w-fit lg:w-56"
        >
          <option value="All">All</option>
          <option value="Tbilisi">Tbilisi</option>
          <option value="Kutaisi">Kutaisi</option>
          <option value="Batumi">Batumi</option>
          <option value="Zugdidi">Zugdidi</option>
          <option value="Poti">Poti</option>
          <option value="Telavi">Telavi</option>

         
        </select>
        <select
        onChange={selectCategory}
        value={category}
        name="Categories" className=" rounded-md p-2.5 lg:w-56">
          <option value="All categories">All categories</option>
          <option value="Administration/Finance">Administration/Finance</option>
          <option value="Art/Media">Art/Media</option>
          <option value="Banking">Banking</option>
          <option value="Beauty/Aesthetic Medicine">Beauty/Aesthetic Medicine</option>
          <option value="Engineering">Engineering</option>
          <option value="Human resources">Human resources</option>
          <option value="IT">IT</option>
          <option value="Insurance">Insurance</option>
          <option value="Legal">Legal</option>
          <option value="Logistics/transportation">Logistics/transportation</option>
          <option value="Marketing">Marketing</option>
          <option value="Medical">Medical</option>
          <option value="Other">Other</option>
        </select>
        <button className=" w-full  bg-blue-950 text-white text-2xl py-2 rounded-md hover:bg-slate-700 lg:w-56">
          Search
        </button>
      </form>
      <h5 className="text-right text-white mt-9 text-xl">
        Jobs <span className="  text-red-600">{jobs && jobs.length}</span>
      </h5>
    </div>
  );
};

export default Search;
