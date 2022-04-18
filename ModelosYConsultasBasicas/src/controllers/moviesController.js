const db = require('../database/models')
const Movies = db.Movies

module.exports = {

    list: (req, res)=>{
        Movies.findAll()
        .then((data)=>{
            res.render('moviesList', {movies: data})
        })
    },
    detail: (req,res)=>{
        Movies.findByPk(req.params.id)
        .then(data => {
            res.render('moviesDetail', {movie: data})
        })
    }, 
    new: (req,res)=>{
        Movies.findAll({order:[
            ['release_date', 'ASC']
        ]}).then(data =>{
            res.render('newestMovies', {movies: data})
        })
    },
    recomended: (req, res)=>{
        Movies.findAll({
            
            order:[
              ['release_date', 'DESC']
              ],
            limit: 5})
            .then(data =>{
                res.render('recommendedMovies', {movies: data})
            })
    }
}