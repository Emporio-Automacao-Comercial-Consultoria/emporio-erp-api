import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from '../routes/routes';

// dotenv
dotenv.config();

// express
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// set server port
const port = process.env.PORT || 3336;
// start server
app
  .listen(port, () => {
    console.log(`Sever running at http://localhost:${port}`);
  })
  .on('error', (err) => {
    console.error(err);
  });
