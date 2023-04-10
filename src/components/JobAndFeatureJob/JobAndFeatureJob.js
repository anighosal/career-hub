const JobAndFeatureJob = async () => {
  const loadCategory = await fetch("/jobs.json");
  const jobCategory = await loadCategory.json();

  // featurejob
  // const loadFeatureJob = await fetch("./featureJob.json");
  // const featureJob = await loadFeatureJob.json();
  return {
    jobCategory,
    // featureJob,
  };
};

export default JobAndFeatureJob;
