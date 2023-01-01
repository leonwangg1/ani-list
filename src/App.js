import Results from "./Results";
import AnimeDetails from "./AnimeDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Results />} />
        <Route path="/watch/:title" element={<AnimeDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
