require('dotenv').config()
const express=require('express'); 
const app=express();
const port = process.env.PORT || 3000; 

//middleware
app.use(express.urlencoded({extended: false}))
// controllers
const pokemonController=require('./Controllers/pokemon'); 
app.use('/pokemon', pokemonController)

app.listen(port, () => { 
    console.log(`the pokemon app is listening on port ${port}`)
})