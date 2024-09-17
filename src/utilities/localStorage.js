const getLocalStorageData = (lsName) => {
    const getLS = localStorage.getItem(lsName);
    if (getLS) {
        return JSON.parse(getLS);
    }
    else {
        return [];
    }
}


const setToLocalStorage = (id, lsName) => {
    const storedData = getLocalStorageData(lsName);
    const isStored = storedData.find(data => data == id);
    // console.log(isStored)
    if (!isStored) {
        storedData.push(id);
        const newDataString = JSON.stringify(storedData);
        localStorage.setItem(lsName, newDataString);
    }


}

export { getLocalStorageData, setToLocalStorage };