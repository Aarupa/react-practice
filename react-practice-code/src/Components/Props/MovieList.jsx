import { useEffect, useState } from "react";
const MovieList = () => {
  const [userSearch, setuserSearch] = useState("");
  const [search, setSearch] = useState([]);
  const [filter, setfilter] = useState([]);
  const [MoreShow, setMoreshow] = useState(null);

  useEffect(() => {
    const fetchAlldata = async () => {
      const response = await fetch(" https://api.tvmaze.com/shows");
      const data = await response.json();
      setSearch(data);
      setfilter(data);
    };
    fetchAlldata();
  }, []);

  //   useEffect(() => {
  //     const SearchData = async () => {
  //       const response = await fetch(
  //         "https://api.tvmaze.com/search/shows?q=${searchTerm}"
  //       );
  //       const data = await response.json();
  //       setfilter(data);
  //     };
  //     SearchData();
  //   }, []);

  const handleSearch = () => {
    if (userSearch.trim() !== "") {
      const filteredData = search.filter((show) =>
        show.name.toLowerCase().includes(userSearch.toLowerCase())
      );
      setfilter(filteredData);
    } else {
      setfilter(search);
    }
  };

  const handleMore = (show) => {
    setMoreshow(show);
  };

  const backHome = () => {
    setMoreshow(null);
  };

  return (
    <div>
      <h2>TV Show</h2>
      <div>
        <input
          type="text"
          placeholder="Enter show"
          value={userSearch}
          onChange={(e) => setuserSearch(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="All">
        {filter.map((show) => (
          <div key={show.id}>
            <h2>{show.name}</h2>
            <img src={show.image.medium} alt="movie image" />
            <br />
            <button onClick={() => handleMore(show)}>Know More</button>
          </div>
        ))}
      </div>

      {MoreShow && (
        <div key={MoreShow.id}>
          <h2>{MoreShow.name}</h2>
          <img src={MoreShow.image.medium} alt="movie image" />
          <p>{MoreShow.summary}</p>
          <button onClick={() => backHome()}>Back To Home</button>
        </div>
      )}
    </div>
  );
};

export default MovieList;
