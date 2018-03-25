import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev.js';
import webpackProdConfig from '../webpack.config.prod.js';
import route from './routes/index.js';

const router = express.Router();
let app = express();


let compiler = {};
let config={};
console.log(process.env.mode);
if(process.env.mode === 'PRODUCTION'){
    console.log('producion runing');
	config = webpackProdConfig;
    compiler = webpack(config);
    app.use(express.static("build"));

    app.use(webpackMiddleware(compiler,{
        publicPath : config.output.publicPath,
        noInfo: true
    }));


} else if(process.env.mode === 'DEVELOPMENT'){
	config = webpackConfig;
    compiler = webpack(config);
    app.use(webpackMiddleware(compiler,{
        hot: true,
        publicPath : config.output.publicPath,
        noInfo: true
    }));

    app.use(webpackHotMiddleware(compiler));
}
else {
	config = webpackConfig;
}


for (var x in route ){
	app.use('/api',require(path.join(__dirname+'/routes/',route[x])));
}


app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname,'../public/index.html'));
});



app.listen(3333,()=>{
  console.log('Running Local Server at Port: ' + 3333);
});
