import { getStoredJob } from "../Utilities/fakedb";

const JobAndFeatureJob = async () => {
  const loadCategory = await fetch("/jobs.json");
  const jobCategory = await loadCategory.json();

  // featurejob

  // featurejob
  const loadFeatureJob = await fetch("/featurejob.json");
  const featureJob = await loadFeatureJob.json();

  // const clickJobAndItem = async () => {
  //   const loadFeatureJob = await fetch("/featureJob.json");
  //   const featureJob = await loadFeatureJob.json();

  //   const savedAppliedJobs = getStoredJob();
  //   for (const id in savedAppliedJobs) {
  //     const foundJob = jData.find((job) => job.id === id);
  //     if (foundJob) {
  //       newArr.push(foundJob);
  //     }
  //   }
  // };

  return {
    jobCategory,
    featureJob,
  };
};

export default JobAndFeatureJob;
