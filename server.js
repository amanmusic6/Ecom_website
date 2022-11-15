const serverConfig = require('./configs/server.config')
const express = require('express')
const {categoryRouter} = require('./controllers/category.controller')
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// app.get('/',function(request,response){
//     response.writeHead();
//     response.end();
// });

app.use('/category',categoryRouter);



app.listen(serverConfig.PORT,()=>{
    console.log(`APPLICATION IS RUNNING ON PORT NO. ${serverConfig.PORT}`);
})
