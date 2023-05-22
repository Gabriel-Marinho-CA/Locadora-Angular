const app = require('./app');
const Loaders = require('./loaders');


Loaders.start();

app.listen(8080, () => console.log('server runing'));