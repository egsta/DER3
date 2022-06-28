const sequelize = require('../sequelize');
const { Model , DataTypes } = require('sequelize');

class Gol extends Model{
    static associate(models){
        Gol.belongsTo(models.Jugador);
        Gol.belongsTo(models.Partido);
    }
}

Gol.init({
    minuto: DataTypes.INTEGER,
    descripcion: DataTypes.STRING
},{
    sequelize,
    tableName: "goles",
    modelName: "gol"
})


module.exports = Gol;