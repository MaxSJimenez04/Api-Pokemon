const {Router} = require('express');

const{
    pokemonsDelete,
    pokemonsGet,
    pokemonsPatch,
    pokemonsPut,
    pokemonsPost
} = require('../controllers/pokemons');

const router = Router();

router.get('/',pokemonsGet);
router.post('/', pokemonsPost);
router.put('/:id', pokemonsPut);
router.patch('/:id', pokemonsPatch);
router.delete('/:id',pokemonsDelete);

module.exports = router;