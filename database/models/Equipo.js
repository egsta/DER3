const sequelize = require('../sequelize');

const { Model, DataTypes } = require('sequelize');

class Equipo extends Model{
    static associate(models){
        Equipo.hasMany(models.Jugador);
        Equipo.hasMany(models.Partido);
        Equipo.hasOne(models.Presidente);
    }
}

 Equipo.init({
        nombre: DataTypes.STRING,
        estadio: DataTypes.STRING,
        aforo: DataTypes.INTEGER,
        fechaFundacion: DataTypes.DATE,
        ciudad: DataTypes.STRING
},
{
    sequelize,
    modelName: "equipo",
    tableName: "equipos"
})

module.exports = Equipo;