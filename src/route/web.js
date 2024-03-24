import express from 'express'
import homeController from '../controllers/homeController'

const router = express.Router()

const initWebRoutes = (app) => {
  router.get('/', homeController.getHomePage)
  router.get('/read-crud', homeController.readCRUD)
  router.get('/edit-crud', homeController.editCRUD)
  router.post('/post-crud', homeController.postCRUD)

  router.post('/put-crud', homeController.putCRUD)

  return app.use('/', router)
}

module.exports = initWebRoutes
