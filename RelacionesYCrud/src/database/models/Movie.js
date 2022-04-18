module.exports = (sequelize, dataTypes) => {
    let alias = 'Movie'; // esto debería estar en singular
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        title: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        rating: {
            type: dataTypes.DECIMAL(3, 1).UNSIGNED,
            allowNull: false
        },
        awards: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        release_date: {
            type: dataTypes.DATEONLY,
            allowNull: false
        },
        length: dataTypes.BIGINT(10),
        genre_id: dataTypes.BIGINT(10)
    };
    let config = {
        timestamps: false,
        tableName: 'movies',
    }
    const Movie = sequelize.define(alias,cols,config);
    

    
    Movie.associate = (models) => {  
        
        Movie.belongsTo(models.Genre,{
        as: "genre",
        foreignKey: 'genre_id'
    })
    Movie.belongsToMany(models.Actor, {
        as: 'actor',
        through: 'actor_movie',
        foreignKey: 'movie_id',
        otherKey:'actor_id',
        timestamps:true
    })



}
  
    //Aquí debes realizar lo necesario para crear las relaciones con los otros modelos (Genre - Actor)

    return Movie
};