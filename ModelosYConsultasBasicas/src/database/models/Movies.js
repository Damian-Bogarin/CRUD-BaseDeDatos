module.exports = (sequelize, dataTypes) => {
    
    const alias = "Movies";

    const cols = {
        id: {
            type: dataTypes.INTEGER(10), 
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        title: {
            type: dataTypes.STRING(50),
            allowNull: false,
        },
        rating: {
            type: dataTypes.DECIMAL(3,1).UNSIGNED,
            allowNull: false,
        }, 
        awards: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            
        },
        release_date: {
            type: dataTypes.DATEONLY,
            allowNull: false,
        },
        length: {
            type: dataTypes.INTEGER(10).UNSIGNED,
        },
        genre_id: {
            type: dataTypes.INTEGER(10).UNSIGNED, 
            foreignKey: true,
            allowNull: false 
        }, 
       
    }

    const config = {
        tableName: 'movies',
        timestamps: true
    }

    const Movies = sequelize.define(alias, cols, config)

    Movies.associate = (models) => {

        Movies.belongsTo(models.Genres,{
            as: "genre",
            foreignKey: 'genre_id'
        })
/* 
        User.hasOne(models.Cart, {
            as: "cart",
            foreignKey: 'userId'
        })
        User.hasMany(models.Like, {
            as: "likes",
            foreignKey: 'userId'
        })
        User.hasMany(models.Stars, {
            as: "stars",
            foreignKey: 'userId'
        })
        User.belongsTo(models.RolUser, {
            as: "rol",
            foreignKey: 'rol_id' 
        }) 
        User.belongsToMany(models.Gender, {
            as: 'gender',
            through: 'gender_user',
            foreignKey: 'userId',
            otherKey:'genderId',
            timestamps:false
        }) */
    }

    return Movies;
} 