import axios from "axios";
import  { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const Job = () => {
    const [job, setJob] = useState<string | any>('')
    const location = useLocation();
    const path = location.pathname;
    const lastSegment = path.substring(path.lastIndexOf("/") + 1);

    useEffect(() => {

        const fetchEvent = async () => {
          try {
            const response = await axios.get(
              `https://jobspot-cc0j.onrender.com/api/jobs/${lastSegment}`
            );
      
            if (response.status === 200) {
              setJob(response.data);
              console.log("job: ", job);
            } else {
              console.error("Error fetching job:", response);
            }
          } catch (error) {
            console.error("Error fetching job:", error);
          }
        };
fetchEvent()

    }, [])

    const formatDate = (dateString: string) => {
        const options = {
          day: "numeric" as const,
          month: "long" as const,
          year: "numeric" as const,
        };
        const date = new Date(dateString);
        return date.toLocaleDateString(undefined, options);
      };
  return (
    <div className="p-5 w-full  job-content relative top-20 lg:top-40 lg:px-40">
  <div className=" bg-white w-full  gap-5 flex flex-col  lg:px-40 p-5 shadow-lg pb-10 lg:py-20">
    <h1 className=" text-3xl lg:text-5xl font-bold lg:pb-20 pb-10">{job.title}</h1>
    <p className="text-2xl ">{job.body}</p>
    <p className="text-2xl opacity-80 pt-10 lg:pt-16">{job.company}</p>
    <p className="opacity-50 text-xl flex flex-row items-center gap-2"><span className="material-symbols-outlined">location_on</span> {job.city}</p>
    <p className="opacity-50 text-xl flex flex-row items-center gap-2"> <span className="material-symbols-outlined money">attach_money</span> {job.compensation}</p>
    {job.email &&  <p className="text-xl"><span className="opacity-50">Send mail to:</span>  <Link className=" underline " to={`mailto:${job.email}`}>{job.email}</Link> </p>}
    <p className="text-xl pt-10 lg:pt-16">{formatDate(job.createdAt)}</p>

  </div>
  </div>
  );
};

export default Job;
