import https from 'https';

const imdbHost = 'https://api.themoviedb.org';
const nowPlayingPath = '/3/movie/now_playing';
const apiKey = '349972148bf1174954e463f5e1d6654c'; // Check the email for the API key

const getApiUrl = ({ path, queryParamString }) =>
  `${imdbHost}${path}?api_key=${apiKey}${
    queryParamString ? '&' + queryParamString : ''
  }`;

const makeRequest = (url) =>
  new Promise((resolve, reject) => {
    const request = https.get(url, (response) => {
      response.setEncoding('utf-8');

      var data = '';

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        console.log(data);
        var responseObject = JSON.parse(data);
        resolve(responseObject);
      });
    });
    request.on('error', (error) => {
      reject(error);
    });
  });

export const getNowPlayingMovies = () =>
  makeRequest(getApiUrl({ path: nowPlayingPath }));
