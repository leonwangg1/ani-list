import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import AnimeCard from "./AnimeCard";

const API_URL = "https://api.jikan.moe/v4/anime?q=";
let ANIME_FOUND = "";

const Results = () => {
  const [anime, setAnime] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // declare fetch anime function
  const searchAnime = async (title) => {
    const response = await fetch(`${API_URL}${title}`);
    const data = await response.json();
    setAnime(data.data);
    data.data.length > 0 ? (ANIME_FOUND = true) : (ANIME_FOUND = false);
    console.log("ANIME FETCHED: " + ANIME_FOUND);
  };

  useEffect(() => {
    // call the function
    searchAnime("").catch(console.error);
  }, []);

  return (
    <div className="app">
      <h1>
        <a href="http://localhost:3000/">Anime List</a>
      </h1>

      <div className="search">
        <input
          placeholder="Search for anime"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              searchAnime(searchTerm);
            }
          }}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchAnime(searchTerm)}
        />
      </div>
      {!ANIME_FOUND.empty && ANIME_FOUND !== false ? (
        <div className="container">
          {anime.map((s) => (
            <AnimeCard series={s} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No anime found</h2>
        </div>
      )}
    </div>
  );
};

export default Results;
