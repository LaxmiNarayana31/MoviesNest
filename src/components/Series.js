import React, { useEffect, useCallback, useState } from "react";

export default function Series(props) {
  const [series, setSeries] = useState([]);
  const { TMBDApiKey, setProgress } = props;

  const updateSeries = useCallback(async () => {
    setProgress(10);
    const url = `https://api.themoviedb.org/3/tv/top_rated?api_key=${TMBDApiKey}`;
    setProgress(40);
    let data = await fetch(url);
    setProgress(70);
    let parseData = await data.json();
    setSeries(parseData.results);
    setProgress(100);
  }, [TMBDApiKey, setProgress]);

  useEffect(() => {
    updateSeries();
  }, [updateSeries]);

  return (
    <>
      <main id="main-body">
        <div className="common-heading">
          <h1>Top Rated Series</h1>
        </div>
        <div className="movies-page">
          {series.map((element) => {
            return (
              <a
                href={`https://www.themoviedb.org/movie/${element.id}`}
                key={element.id}>
                <div className="common-card">
                  <div className="card-image">
                    <img
                      src={`https://image.tmdb.org/t/p/w220_and_h330_face${element.poster_path}`}
                      alt=""
                    />
                  </div>
                  <div className="movie-title">{element.name}</div>
                  <p className="movie-date">{element.first_air_date}</p>
                  <p className="movie-date">
                    {element.overview.slice(0, 200)}...
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </main>
    </>
  );
}
