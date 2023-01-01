// Create a component that will render the selected anime details
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const API_URL = "https://api.jikan.moe/v4/anime?q=";

const AnimeDetails = () => {
  const { title } = useParams();
  const [anime, setAnime] = useState([]);

  // declare fetch anime function
  const searchAnime = async (title) => {
    const response = await fetch(`${API_URL}${title}`);
    const data = await response.json();
    setAnime(data.data[0]);
  };

  useEffect(() => {
    // call the function
    searchAnime(title).catch(console.error);
  }, [title]);

  return (
    <div className="app">
      <h1>
        <a href={`/`}>Anime List</a>
      </h1>
      <h2>{title}</h2>
      <h3>{anime.synopsis}</h3>
    </div>
  );
};

export default AnimeDetails;
