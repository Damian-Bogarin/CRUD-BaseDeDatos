module.exports = (sequelize, dataTypes) => {
    let alias = 'Actor';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        first_name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        rating: {
            type: dataTypes.DECIMAL(3,1),
            allowNull: false
        },
        favorite_movie_id: dataTypes.BIGINT(10).UNSIGNED
    };
    let config = {
        timestamps: false,
        tableName: 'actors',
        
    }
    const Actor = sequelize.define(alias, cols, config); 

    
    Actor.associate = (models) => {
          Actor.belongsToMany(models.Movie, {
        as: 'movie',
        through: 'actor_movie',
        foreignKey: 'actor_id',
        otherKey:'movie_id',
        timestamps:true
    })
    }
  
    //Aquí debes realizar lo necesario para crear las relaciones con el modelo (Movie)
 
    return Actor
};