// Create a component that will render the selected anime details
import { useParams } from "react-router-dom";

const AnimeDetails = () => {
  const { title } = useParams();
  return (
    <div className="app">
      <h1>
        <a href="http://localhost:3000/">Anime List</a>
      </h1>
      <h2>{title}</h2>;
    </div>
  );
};

export default AnimeDetails;
