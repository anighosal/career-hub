const JobAndFeatureJob = async () => {
  const loadCategory = await fetch("/jobs.json");
  const jobCategory = await loadCategory.json();

  // featurejob
  const loadFeatureJob = await fetch("./featurejob.json");
  const featureJob = await loadFeatureJob.json();
  return {
    jobCategory,
    featureJob,
  };
};

export default JobAndFeatureJob;
