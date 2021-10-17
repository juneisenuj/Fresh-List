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