import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

import routes from './routes/index';

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '../public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

app.listen(port, () => {
  console.log('API server listening on port: ', port);
});
