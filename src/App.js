import "./App.css";
import { useEffect, useState } from "react";
import Tmdb from "./Tmdb";
import Movierow from "./Components/Movierow";
import FeaturedMovie from "./Components/FeaturedMovie";
import Header from "./Components/Header";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.addEventListener("scroll", scrollListener);
    };
  }, []);

  useEffect(() => {
    const loadList = async () => {
      const list = await Tmdb.getHomeList();
      setMovieList(list);

      const originals = list.filter((film) => film.slug === "originals");
      const randomNum = Math.floor(
        Math.random() * (originals[0].item.results.length - 1)
      );
      const featured = originals[0].item.results[randomNum];
      const featuredInfo = await Tmdb.getMovieInfo(featured.id, "tv");
      setFeaturedData(featuredInfo);
    };

    loadList();
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader} />
      {featuredData && <FeaturedMovie item={featuredData} />}
      <section className="lists">
        {movieList.map((item, key) => (
          <Movierow key={key} title={item.title} items={item.item} />
        ))}
      </section>
      <footer>
        Just practicing. <br />
        Please do not sue me xD <br />
        All rights to Netflix <br />
      </footer>
      {/* <div className="loading">
        <img
          src={`https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.filmelier.com%2Fbr%2Fnoticias%2F6-dicas-para-nao-ter-problemas-com-o-streaming-na-quarentena&psig=AOvVaw2tbFBewtR4yu8Y7PtOt1RH&ust=1635992979566000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNi9x_WS-_MCFQAAAAAdAAAAABAD`}
          alt="loading"
        />
      </div> */}
    </div>
  );
}

export default App;
