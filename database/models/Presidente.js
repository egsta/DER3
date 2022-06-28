const sequelize = require('../sequelize');
const { Model , DataTypes } = require('sequelize');

class Presidente extends Model{
    static associate(models){
        Presidente.belongsTo(models.Equipo)
    }
}

Presidente.init({
    dni: DataTypes.STRING,
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    fechaNacimiento: DataTypes.DATE,
    añoElecto: DataTypes.DATE
},{
    sequelize,
    tableName: "presidentes",
    modelName: "presidete"
})

module.exports = Presidente;