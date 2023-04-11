const addToDb = (id) => {
  let appliedJob = {};

  // get the appliedJob from localstorage
  const storedJob = localStorage.getItem("applied-Job");
  if (storedJob) {
    appliedJob = JSON.parse(storedJob);
  } else {
    appliedJob = {};
  }

  //   add quantity
  const quantity = appliedJob[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    appliedJob[id] = newQuantity;
    // localStorage.setItem(id, newQuantity);
  } else {
    appliedJob[id] = 1;
    // localStorage.setItem(id, 1);
  }
  localStorage.setItem("applied-Job", JSON.stringify(appliedJob));
};

// get the appliedJob from localstorage
const getStoredJob = () => {
  let appliedJob = {};

  // get the appliedJob from localstorage
  const storedJob = localStorage.getItem("applied-Job");
  if (storedJob) {
    appliedJob = JSON.parse(storedJob);
  } else {
    appliedJob = {};
  }

  return appliedJob;
};

export { addToDb, getStoredJob };
