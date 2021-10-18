import express from 'express';
import axios from 'axios';

const app = express();
app.use(express.json());
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello');
})

app.get('/data', (req, res) => {
  axios.get('http://jsonplaceholder.typicode.com/posts')
    .then((data) => {
      res.send(JSON.stringify(data.data))
    })
})

app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})

// I tried implementing backend using TypeScript but it gives an error
// module from tsconfig.json kept changing from commonjs to esnext which
// prevented me from using import from command
/*
import express, { Application, Request, Response } = 'express';
import axios from 'axios';

const app: Application = express();
app.use(express.json());
const port = 3001;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello')
})

app.get('/data', (req: Request, res: Response) => {
  axios.get('http://jsonplaceholder.typicode.com/posts')
       .then((data) => {
         res.send(JSON.stringify(data.data))
       })
})
*/