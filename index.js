const app = require('./app');
const port = process.env.PORT || 6000;

 app.listen(port, ()=>{
     console.log(`Server has been started on ${port} port`)
 })
