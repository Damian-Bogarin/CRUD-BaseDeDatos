const db = require('../database/models')
const Genres = db.Genres

module.exports = {
    list: (req, res) => {
        Genres.findAll()
        .then(data =>{
            res.render('genresList',{genres: data})
        })
    },
    detail: (req, res) =>{
        Genres.findByPk(req.params.id)
        .then(data=>{
            res.render('genresDetail', {genre: data })
        })
    }
}
