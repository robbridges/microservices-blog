import express from 'express';
import { randomBytes } from 'crypto';
import cors from 'cors';
import axios from 'axios';

const app = express();

app.use(express.json());
app.use(cors());

const posts = {};

app.get('/posts', (req, res) => {
  res.send(posts);
});
/* this is our post creation service, it sends off a post that is stored as an object to be later rendered into react, it also telepgraphs this information to our event bus */
app.post('/posts', async (req, res) => {
  const id = randomBytes(4).toString('hex');
  const { title } = req.body;

  posts[id] = {
    id, 
    title
  };

  await axios.post('http://localhost:4005/events', {
    type: 'PostCreated',
    data: {
      id, title
    }
  });

  res.status(201).send(posts[id]);

});

app.listen(4000, () => {
  console.log('Listening on port 4000');
});