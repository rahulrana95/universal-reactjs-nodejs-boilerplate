import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev.js';

let app = express();
const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler,{
  hot: true,
  publicPath : webpackConfig.output.publicPath,
  noInfo: true
}));

app.use(webpackHotMiddleware(compiler));
app.get('/*', (request, response) => {
  response.sendFile(path.join(__dirname,'../public/index.html'));
});


app.listen(3333,()=>{
  console.log('Running Local Server at Port: ' + 3333);
});
