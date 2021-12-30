import "./FeaturedMovie.css";

export default (props) => {
  const firstDate = new Date(props.item.first_air_date);
  const genres = props.item.genres.map((element) => element.name).join(", ");

  const gostosa = () => {
    console.log("LUIZA SUA GOSTOSA!");
  };

  const muitogostosa = () => {
    console.log("É... É MUITO GOSTOSA MESMO!");
  };

  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${props.item.backdrop_path})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name"> {props.item.original_name} </div>
          <div className="featured--info">
            <div className="featured--points">
              {props.item.vote_average} pontos
            </div>
            <div className="featured--year"> {firstDate.getFullYear()} </div>
            <div className="featured--season">
              {props.item.number_of_seasons} temporada
              {props.item.number_of_seasons === 1 ? "" : "s"}
            </div>
          </div>
          <div className="featured--description"> {props.item.overview} </div>
          <div className="featured--buttons">
            <a href="#" className="featured--watchbutton" onClick={gostosa}>
              ▷ Watch
            </a>
            <a
              href="#"
              className="featured--mylistbutton"
              onClick={muitogostosa}
            >
              to My List
            </a>
          </div>
          <div className="featured--genres">
            <strong>Genres</strong> {genres}
          </div>
        </div>
      </div>
    </section>
  );
};
