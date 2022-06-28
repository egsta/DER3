const sequelize = require("../sequelize");
const { Model , DataTypes } = require('sequelize');


class Jugador extends Model{
    static associate(models){
        Jugador.belongsTo(models.Equipo);
        Jugador.hasMany(models.Gol);
    }
}

Jugador.init({
    nombre: {type: DataTypes.STRING},
    fechaNacimiento: {type: DataTypes.DATE},
    posicion: {type: DataTypes.STRING},
    }
    ,{
        sequelize,
        modelName: "jugador",
        tableName: "jugadores"
    }
)

module.exports = Jugador;