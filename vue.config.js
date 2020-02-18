const mockdata=require('./public/mock/index.json');

module.exports={
    devServer:{
        port:8080,
        before(app){
            app.get('/api/index.json',(req,res)=>{
                res.json(mockdata)
            })
        }        
    }
}