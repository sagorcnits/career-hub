function getLocalStorage() {
  const getData = localStorage.getItem("job");
  if (getData) {
    return JSON.parse(getData);
  }

  return [];
}

function saveLocalStorage(id) {
  const jobStoreData = getLocalStorage();
  const exists = jobStoreData.find((jobID) => jobID === id);
  if (!exists) {
    jobStoreData.push(id);
    localStorage.setItem("job", JSON.stringify(jobStoreData));
  }
}

export { getLocalStorage, saveLocalStorage };
