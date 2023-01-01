const AnimeCard = ({ series }) => {
  return (
    <div className="movie">
      <div>
        <p>{series.year}</p>
      </div>

      <div>
        <a href={`/watch/${series.title}`}>
          <img
            src={
              // movie1?.images?.jpg?.image_url !== "undefined"
              //   ? movie1?.images?.jpg?.image_url
              //   : "https://via.placeholder.com/400"
              series?.images?.jpg?.image_url ??
              "https://via.placeholder.com/400"
            }
            alt={series.title}
            // onClick={() => {
            //   <AnimeDetails title={series.title} />;
            //   console.log(series.title);
            // }}
          />
        </a>
      </div>

      <div>
        <h3>{series.title}</h3>
      </div>
    </div>
  );
};

export default AnimeCard;
