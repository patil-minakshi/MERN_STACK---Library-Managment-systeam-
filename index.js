const express = require('express')
const app = express()
 const cors = require('cors')
 
const mongoose = require ('mongoose')
//const Bookmodel = require('./modals/bookmodel')
const bookroutes = require('./routes/bookroutes')
 app.use(cors())
// app.use(cors({ origin: '*' }));
 app.use(express.json())
const PORT = process.env.PORT || 3000;

app.get('/' , (req , res) => {
  res.send("hello from this side")
})




app.use('/books' , bookroutes)
// insert book

mongoose.connect('mongodb+srv://book:book1234@bookstore.ake9m5n.mongodb.net/books-collection'
).then(()=>{
  console.log('app connected to database');

  app.listen(PORT , ()=>{
    console.log(`port is running at ${PORT}`);
     
  })
}) . catch((error)=>{
  console.log(error);
})
















/*const express = require('express')
const mongoose = require ('mongoose')
const cors = require('cors')
const app = express()
const Usermodel = require('./modals/Users')
const PORT = process.env.PORT || 3000;
app.use(cors())
app.use(express.json())

app.listen(PORT, ()=>{
    console.log("server is running");
})

 app.get('/' , (req , res)=> {
    res.send ("hello")

 })

mongoose.connect("mongodb+srv://minu:minu%401234@cluster0.42kbiom.mongodb.net/school?retryWrites=true&w=majority")
app.get("/getusers", async (req, res) => {
    try { 
        console.log("response send");
      const users = await Usermodel.find({});
      res.json(users);
     
      
    } catch (error) {
     
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });*/