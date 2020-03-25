const express = require('express')
const crypto = require('crypto')
const conn = require('./database/conn')

const ongCtrl = require('./controllers/ongCtrl')
const incidentsCtrl = require('./controllers/incidentCtrl')
const profileCtrl = require('./controllers/profileCtrl')
const sessionCtrl = require('./controllers/sessionCtrl')

const routes = express.Router()

routes.get('/ongs', ongCtrl.index)
routes.post("/ongs", ongCtrl.create)

routes.post('/session', sessionCtrl.create)

routes.get('/profile', profileCtrl.index)

routes.get('/incidents', incidentsCtrl.index)
routes.post("/incidents", incidentsCtrl.create)
routes.delete("/incidents/:id", incidentsCtrl.delete)

module.exports = routes