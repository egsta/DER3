const sequelize = require('../sequelize');
const { Model, DataTypes } = require('sequelize');

class Partido extends Model{
    static associate(models){
        Partido.belongsTo(models.Equipo, {as: "Local", foreignKey: {
            name: 'localId'
          }})
          Partido.belongsTo(models.Equipo, {as: "Visitane",  foreignKey: {
            name: 'visitanteId'
          }})
          Partido.hasMany(models.Gol)
    }
}

Partido.init({
    fechaPartido: DataTypes.DATE,
    golLocal: DataTypes.INTEGER,
    colVisita: DataTypes.INTEGER,
    golTotal: DataTypes.INTEGER
}
,{
    sequelize,
    modelName: "partido",
    tableName: "partidos"
})

module.exports = Partido;