const {response} = require('express');
const {pokemons} = require('../models/datos-pokemons');

const pokemonsGet = (req, res = response)=>{
    console.log(pokemons);
   res.json(pokemons); 
}

const pokemonsPost = (req, res = response)=>{
    const pok = req.body;
    const nuevoPokemon = {
        id: parseInt(pok.id),
        nombre: pok.nombre,
        tipo: pok.tipo,
        imgurl: pok.imgurl
    }
    pokemons.push(nuevoPokemon);
    console.log(pokemons);
    res.status(201).json({
        msg: `El pokemon ${nuevoPokemon.nombre} se ha creado`
    }); 
 }

 /** Solo cambia el url de la imagen del pokemon */
const pokemonsPatch = (req, res = response) => {
   const { id } = req.params;
   const { imgurl } = req.body;
   let index = pokemons.findIndex(p => p.id === parseInt(id));
   if (index !== -1) {
       pokemons[index].imgurl = imgurl;
       res.json(pokemons[index]);
   } else {
       res.status(404).json({
           msg: 'Pokemon no encontrado'
       });
   }
}

// Actualiza completamente un pokemon existente por su ID
const pokemonsPut = (req, res = response) => {
   const { id } = req.params;
   const { nombre, tipo, imgurl } = req.body;
   let index = pokemons.findIndex(p => p.id === parseInt(id));
   if (index !== -1) {
       pokemons[index] = { id: parseInt(id), nombre, tipo, imgurl };
       res.json({
           msg: `El pokemon con ID ${id} ha sido actualizado`,
           pokemon: pokemons[index]
       });
   } else {
       res.status(404).json({
           msg: 'Pokemon no encontrado'
       });
   }
}

// Elimina un pokemon por su ID
const pokemonsDelete = (req, res = response) => {
   const { id } = req.params;
   let index = pokemons.findIndex(p => p.id === parseInt(id));
   if (index !== -1) {
       const deletedPokemon = pokemons.splice(index, 1);
       res.json({
           msg: `El pokemon con ID ${id} ha sido eliminado`,
           pokemon: deletedPokemon[0]
       });
   } else {
       res.status(404).json({
           msg: 'Pokemon no encontrado'
       });
   }
}

 module.exports = {
    pokemonsDelete,
    pokemonsGet,
    pokemonsPatch,
    pokemonsPut,
    pokemonsPost
 }