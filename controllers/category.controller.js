let express = require('express')
let {categoryService} = require('../services/category.service')
let {executeWithSync} = require('../connections/sequelize.connection')
let categoryRouter = express.Router();  // express.Router will give segregated object of app else we will need to do
//                                         let app = express(); in every controller.


categoryRouter.get('/',function(request,response){
    executeWithSync(categoryService
    .getCategories()
    .then((data)=>data.map((single) => single.dataValues))
    .then((data)=>{
        response.setHeader('content-type','application/json');
        response.writeHead(200);
        response.end(JSON.stringify(data));
    }).catch((error)=>{
        response.setHeader('content-type','application/json');
        response.writeHead(500);
        console.log(`Error occured while fatching category ${error}`);
        response.end(JSON.stringify({
            message : 'error occured'
        }))
    }))
})

categoryRouter.post('/',function(request,response){
    executeWithSync(categoryService
    .createCategories(request.body)
    .then((data)=>data.map((single) => single.dataValues))
    .then((data)=>{
        response.setHeader('content-type','application/json');
        response.writeHead(200);
        response.end(JSON.stringify(data));
    }).catch((error)=>{
        response.setHeader('content-type','application/json');
        response.writeHead(500);
        console.log(`Error occured while creating category ${error}`);
        response.end(JSON.stringify({
            message : 'error occured'
        }))
    }))
})


module.exports = {
    categoryRouter
}