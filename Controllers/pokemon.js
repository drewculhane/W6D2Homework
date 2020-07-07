const express=require('express'); 
const router=express.Router(); 
const pokemon=require('../Models/pokemon'); 
//index (an array of objects)
router.get('/', (req, res) => {
    res.send(pokemon)
})
// GET an object for an id param. 
router.get('/:id', (req, res) =>{
    res.send(pokemon[req.params.id]);
});
// DELETE an object for an id param. 
router.delete('/:id', (req,res) => {
    const deletedPokemon=pokemon.splice(req.params.id, 1);
    res.send(deletedPokemon);
    console.log(deletedPokemon)
})
// POST (create) a new pokemon. 
router.post('/', (req, res) => {
    // get data from the user/client 
    req.body.damage=Number(req.body.damage);
    req.body.id=Number(req.body.id);
    const newData=req.body; 
    // fruits.push();
    pokemon[req.params.id]=req.body; 
        res.send(req.body);
});
// Deleting a pokemon based on its ID. 
router.delete('/:id', (req,res) => {
    const deletedpokemon=pokemon.splice(req.params.id, 1);
    res.send(deletedPokemon);
})
router.put('/:id', (req, res) => {
    // get data from the user /client 
    req.body.damage=Number(req.body.damage);
    req.body.id=Number(req.body.id);
    pokemon[req.params.id] = req.body; 
    res.send(req.body); 
})

module.exports=router; 