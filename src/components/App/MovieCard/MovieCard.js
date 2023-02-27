import React from 'react';


import './MovieCard.css';
const imdbImageHost = 'https://image.tmdb.org/t/p/original';
const MovieCard = (props) => {
    const movie = props.movie;
    const posterPath = imdbImageHost+movie.poster_path;
    return (

            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={posterPath} className="poster" alt="Avatar"/>
                        <div className="title">{movie.original_title}</div>
                        <div className="title"><b>{movie.vote_average}</b> <i className="fa-solid fa-star rating"></i></div>
                    </div>
                    <div className="flip-card-back">
                        <img src={posterPath} className="poster_back" alt="Avatar"/>
                        <div className="poster_back_right">
                            <span>{movie.original_title}</span>
                            <p>{movie.genre_ids[0]}</p>
                            <p><b>{movie.vote_average}</b> <i className="fa-solid fa-star rating"></i></p>
                        </div>

                        <div className="poster_back_bottom">
                            <h5>Description</h5>
                            <div>
                                {movie.overview.slice(0,100)}
                            </div>
                            <h5>Cast</h5>
                            <div>
                                coming soon
                            </div>
                        </div>

                    </div>
                </div>
            </div>

    );
};

export default MovieCard;
