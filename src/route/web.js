import express from 'express'
import homeController from '../controllers/homeController'
import userController from '../controllers/userController'

const router = express.Router()

const initWebRoutes = (app) => {
  router.get('/crud', homeController.getHomePage)
  router.get('/read-crud', homeController.readCRUD)
  router.get('/edit-crud', homeController.editCRUD)
  router.post('/post-crud', homeController.postCRUD)

  router.post('/put-crud', homeController.putCRUD)
  router.post('/delete-crud', homeController.deleteCRUD)

  router.post('/api/users', userController.handleLogin)
  return app.use('/', router)
}

module.exports = initWebRoutes
