const models = {
 Equipo: require('./Equipo'),
 Jugador: require('./Jugador'),
 Presidente: require('./Presidente'),
 Partido: require('./Partido'),
 Gol: require('./Gol')
}

let modelList = []

Object.keys(models).forEach(model => {
    modelList.push(models[model])
})


module.exports = {
    models: models,
    modelList: modelList
}