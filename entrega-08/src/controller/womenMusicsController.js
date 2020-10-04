const musicas = require('../model/womenMusics.json');

const getAll = (req,res) => {
    console.log(req.url);

    res.status(200).send(musicas);
};

const getByID = (req,res) => {
    const id = req.params.id
    const musicaFiltrada = musicas.find((musica) => {
        return musica.id == id
    })

    res.status(200).send(musicaFiltrada);
};

const getMusicByYear = (req,res) => {
    const ano = req.params.ano
    const musicaFiltradaAno = musicas.filter((musica) => {
        return musica.ano == ano
    })

    res.status(200).send(musicaFiltradaAno);
};

const getAllArtists = (req,res) => {
    const artistas = musicas.map((musica) => musica.artista)

    res.status(200).send(artistas);
};

const getByArtist = (req,res) => {
    const artista = req.params.artista
    const artistaFiltrada = musicas.filter((musica) => {
        return musica.artista == artista
    })

    res.status(200).send(artistaFiltrada);
};

const getAllAlbuns = (req,res) => {
    const albuns = musicas.map((musica) => musica.album)

    res.status(200).send(albuns);
};

const getByAlbum = (req,res) => {
    const album = req.params.album
    const albumFiltrado = musicas.filter((musica) => {
        return musica.album == album
    })

    res.status(200).send(albumFiltrado);
};

module.exports = { getAll , getByID , getMusicByYear , getByArtist , getByAlbum ,getAllArtists , getAllAlbuns };