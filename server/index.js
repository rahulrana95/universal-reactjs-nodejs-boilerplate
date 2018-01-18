import express from 'express';
import path from 'path';
const app = express();

app.get('/*', (request, response) => {
  response.sendFile(path.join(__dirname,'../public/index.html'));
});


app.listen(3333,()=>{
  console.log('Running Local Server at Port: ' + 3333);
});
