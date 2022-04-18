module.exports = (sequelize, dataTypes) => {
    
    const alias = "Genres";

    const cols = {
        id: {
            type: dataTypes.INTEGER(10), 
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: dataTypes.STRING(50),
            allowNull: false,
        },
        ranking: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
        }, 
        active: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            
        },
        /* realese_date: {
            type: dataTypes.DATE,
            allowNull: false,
        },
        length: {
            type: dataTypes.INTEGER(10).UNSIGNED,
        },
        genre_id: {
            type: dataTypes.INTEGER(10).UNSIGNED, 
            foreignKey: true,
            allowNull: false 
        },  */
       
    }

    const config = {
        tableName: 'genres',
        timestamps: true
    }

    const Genres = sequelize.define(alias, cols, config)

    Genres.associate = (models) => {

       
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

    return Genres;
} 