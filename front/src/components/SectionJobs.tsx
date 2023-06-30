import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/redux";
import { useNavigate } from "react-router";

const SectionJobs = () => {
  const [jobs, setJobs] = useState<any>(null);
  const city = useSelector((store: RootState) => store.city.value);
  const category = useSelector((store: RootState) => store.category.value);

  const navigate = useNavigate()

  useEffect(() => {
    const getJobs = async () => {
      try {
        const response = await axios.get("https://jobspot-cc0j.onrender.com/api/jobs");
        setJobs(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getJobs();
  }, []);

  const formatDate = (dateString: string) => {
    const options = {
      day: "numeric" as const,
      month: "long" as const,
      year: "numeric" as const,
    };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  let JobsSelected = jobs;
  if (jobs) {
    if (city && city !== "All") {
      JobsSelected = JobsSelected.filter((job: any) => job.city === city);
    }
    if (category && category !== "All categories") {
      JobsSelected = JobsSelected.filter((job: any) => job.category === category);
    }
  }
  console.log(JobsSelected);

  return (
    <ul className="w-full bg-slate-100 h-auto p-5 relative jobs space-y-5 lg:px-40 min-h-screen">
      {jobs ? (
        JobsSelected.map((job: any) => (
          <li key={job._id} className="p-3 bg-white shadow-lg space-y-1 flex flex-col relative lg:flex-row lg:items-center lg:space-y-0 lg:gap-5 lg:px-5 "
          onClick={() => navigate(`/${job._id}`) }
          >
            <p className="opacity-30 lg:order-5">{formatDate(job.createdAt)}</p>
            <p className="text-2xl font-bold text-gray-950 lg:order-1">{job.title}</p>
            <p className="lg:order-3">{job.company}</p>
            <p className="opacity-30 items-center flex flex-row gap-1 lg:order-2">
              <span className="material-symbols-outlined">location_on</span>
              {job.city}
            </p>
            <p className="flex flex-row opacity-30 items-center gap-1 lg:order-4">
              <span className="material-symbols-outlined money">attach_money</span>
              {job.compensation}
            </p>
            <button className="absolute right-4 bottom-4 bg-blue-950 py-2 px-4 text-white rounded-sm hover:bg-blue-900 active:bg-blue-700 lg:translate-y-2">Go to job</button>
          </li>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </ul>
  );
};

export default SectionJobs;
