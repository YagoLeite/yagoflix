import "./Movierow.css";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

export default (props) => {
  const [scrollX, setScrollX] = useState(0);

  const leftArrowHandler = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const rightArrowHandler = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = props.items.results.length * 150;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setScrollX(x);
  };

  return (
    <div className="movieRow">
      <h2>{props.title}</h2>
      <div className="movieRow--left" onClick={leftArrowHandler}>
        <ArrowLeftIcon style={{ fontSize: 25 }} />
      </div>
      <div className="movieRow--right" onClick={rightArrowHandler}>
        <ArrowRightIcon style={{ fontSize: 25 }} />
      </div>
      <div className="movieRow--listarea">
        <div
          className="movieRow--list"
          style={{
            marginLeft: scrollX,
            width: props.items.results.length * 150,
          }}
        >
          {props.items.results.map((item, key) => (
            <div key={key} className="movieRow--item">
              <img
                src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                alt={item.original_title}
                key={key}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
