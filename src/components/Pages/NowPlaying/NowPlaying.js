import React from 'react';

import PageTitle from '../../_shared/PageTitle/PageTitle';
import useFetchData from '../../hooks/useFetchData';
import MovieCard from "../../App/MovieCard/MovieCard";

const NowPlaying = () => {
  let movies = [];
  const { response, error, loading } = useFetchData('/movies/nowPlaying');

  if (error) {
    return <PageTitle>Error</PageTitle>;
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if(response) {
    let r =  {
      "dates": {
        "maximum": "2023-02-25",
        "minimum": "2023-01-08"
      },
      "page": 1,
      "results": [{
        "adult": false,
        "backdrop_path": "/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
        "genre_ids": [28, 12, 878],
        "id": 505642,
        "original_language": "en",
        "original_title": "Black Panther: Wakanda Forever",
    "overview": "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
    "popularity": 3952.862,
        "poster_path": "/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
        "release_date": "2022-11-09",
    "title": "Black Panther: Wakanda Forever",
        "video": false,
        "vote_average": 7.4,
        "vote_count": 3583
  }, {
      "adult": false,
          "backdrop_path": "/irwQcdjwtjLnaA0iErabab9PrmG.jpg",
          "genre_ids": [28, 12, 53],
          "id": 646389,
          "original_language": "en",
      "original_title": "Plane",
          "overview": "After a heroic job of successfully landing his storm-damaged aircraft in a war zone, a fearless pilot finds himself between the agendas of multiple militias planning to take theplane and its passengers hostage.",
      "popularity": 3337.265,
          "poster_path": "/qi9r5xBgcc9KTxlOLjssEbDgO0J.jpg",
          "release_date": "2023-01-12",
          "title": "Plane",
          "video": false,
          "vote_average": 6.9,
          "vote_count": 648
    }, {
      "adult": false,
          "backdrop_path": "/b1Y8SUb12gPHCSSSNlbX4nB3IKy.jpg",
      "genre_ids": [16, 12, 35],
          "id": 315162,
          "original_language": "en",
          "original_title": "Puss in Boots: The Last Wish",
          "overview": "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
      "popularity": 3351.139,
          "poster_path": "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
      "release_date": "2022-12-07",
          "title": "Puss in Boots: The Last Wish",
          "video": false,
          "vote_average": 8.5,
          "vote_count": 4044
    }
  ],
    "total_pages": 72,
        "total_results": 1435
  }
    movies = r.results;
    //   movies = response.results;
    console.log(movies[0])

  }
  return (
    <React.Fragment>
      <PageTitle>Now Playing</PageTitle>
      {
        response ? movies.map((m) => <MovieCard key={m.id} movie={m}></MovieCard>) : ''
      }
    </React.Fragment>
  );
};

export default NowPlaying;
