import { useEffect, useState } from "react";


const useLoadData = () => {
  const [shows, setShows] = useState([]);
  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(res => res.json())
      .then(data => setShows(data))
  }, [])
  // console.log(shows);

  return [shows];
};

export default useLoadData;
