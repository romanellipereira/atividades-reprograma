const express = require('express');
const route = express.Router();
const controller = require('../controller/womenMusicsController');

route.get('/', controller.getAll);
route.get('/musicas', controller.getAll);
route.get('/musica/:id', controller.getByID);
route.get('/musicas/ano/:ano', controller.getMusicByYear);
route.get('/artistas/', controller.getAllArtists);
route.get('/artista/:artista', controller.getByArtist);
route.get('/albuns/', controller.getAllAlbuns);
route.get('/album/:album', controller.getByAlbum);


module.exports = route;