import React, { useEffect, useState } from "react";

function LoadData() {
    const [loading, setLoading] = useState(false);
    // define type that can be set with setData in the <>
    const [data, setData] = useState<number[] | null>(null);
    const [page, setPage] = useState(1);

    function loadData() {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        if (page === 1) {
          setData([1, 2, 3, 4, 5]);
        } else if (page === 2) {
          setData([6, 7, 8, 9, 10]);
        } else {
          setData(null);
        }
      }, 1000);
    }
  
    // useEffect takes a function and a list of dependencies. The function will be called
    // whenever the component is re-rendered due to a change in one of the dependencies
    // loadData will be called whenever the page state is changed
    useEffect(loadData, [page]);
  
    function handleNext() {
      setPage((currentPage) => currentPage + 1);
    }
  
    return (
      <>
        {loading && <p>Loading...</p>}
        {data && <pre>{JSON.stringify(data, null, 1)}</pre>}
        <span>Current Page: {page}</span>
        <button onClick={handleNext}>Next</button>
      </>
    );
  }

  export default LoadData;